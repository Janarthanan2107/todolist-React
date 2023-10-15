import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// icons import
import { LiaTimesSolid } from "react-icons/lia";
import toast, { Toaster } from "react-hot-toast";

// css import
import "../modelWindow/model.css";

const Model = ({ isModelOpen, modelClose }) => {
  // form states
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const nulling =()=>{
    setTitle("")
    setStatus("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title){
      // Create a new task object with a unique ID
      const newItem = {
        id: uuidv4(),
        title,
        status,
      };
      console.log(newItem)
      // getting the existing data
      const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      // adding the new data with that existing data
      const updatedTasks = [...existingTasks, newItem];
      // storing in local storage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      // nulling the inputs
      nulling()
      // model close
      modelClose();
    }else{
      toast.error("Please enter a title");
    }
  };

  return (
    <div className={`overlay ${isModelOpen ? "open" : "close"}`}>
      <div className="model-container">
        <div className="bg-lightGray p-5 w-[500px] rounded-lg relative">
          <div className="flex justify-between">
            <p className="text-[1.2rem] font-semibold text-darkGray">
              Add TODO
            </p>
            <span
              className="bg-iconBg p-2 rounded-sm text-[1.1rem] text-lightDarkGray cursor-pointer absolute -top-11 right-2 hover:bg-red-500 hover:text-white"
              onClick={modelClose}
            >
              <LiaTimesSolid />
            </span>
          </div>
          <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="title" className="font-medium text-darkGray">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="py-3 px-2 w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="Status" className="font-medium text-darkGray">
                Status
              </label>
              <select
                type="text"
                name="Status"
                value={status}
                onChange={handleStatusChange}
                className="py-3 px-2 w-full"
              >
                <option value="Incomplete">
                  Incomplete
                </option>
                <option value="Complete">Completed</option>
              </select>
            </div>
            <div className="form-control flex gap-3 mt-4">
              <button
                type="submit"
                className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white"
              >
                Add Task
              </button>
              <button
                type="button"
                className="py-2 px-[1.3rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray"
                onClick={modelClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
