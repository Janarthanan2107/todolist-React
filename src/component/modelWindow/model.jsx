import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { LiaTimesSolid } from "react-icons/lia";
import toast from "react-hot-toast";

import "../modelWindow/model.css";

//import custom hook for Modal Context
import { useModalContext } from "../../context/modal.context";
import { useTaskContext } from "../../context/task.context";

const Model = ({}) => {
  //Modal
  const { isModalOpen, closeModal } = useModalContext();
  const { tasks, addTask, isEditing, editTaskId, editTask } = useTaskContext();

  // states for the fields in model form
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setStatus("Incomplete");
  };

  useEffect(() => {
    if (isEditing) {
      const itemToEdit = tasks.find((task) => task.id === editTaskId);
      if (itemToEdit) {
        setTitle(itemToEdit.title);
        setStatus(itemToEdit.status);
      }
    }
  }, [isEditing, editTaskId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      toast.error("Please enter a title");
      return;
    }

    if (isEditing) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === editTaskId) {
          return {
            ...task,
            title,
            status,
          };
        }
        return task;
      });

      editTask(updatedTasks);

      resetForm();
      closeModal();
      toast.success("Task Updated!");
    } else {
      const newItem = {
        id: uuidv4(),
        title,
        status,
        formattedDate: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          month: "numeric",
          day: "numeric",
          year: "numeric",
        }),
      };

      addTask(newItem);
      resetForm();
      closeModal();
      toast.success("Task Created!");
    }
  };

  return (
    <div className={`overlay ${isModalOpen ? "open" : "close"}`}>
      <div className="model-container">
        <div className="bg-lightGray p-5 w-[500px] rounded-lg relative">
          <div className="flex justify-between">
            <p className="text-[1.2rem] font-semibold text-darkGray">
              {isEditing ? "Edit Task" : "Add TODO"}
            </p>
            <span
              className="bg-iconBg p-2 rounded-sm text-[1.1rem] text-lightDarkGray cursor-pointer absolute -top-11 right-2 hover:bg-red-500 hover:text-white"
              onClick={closeModal}
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
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Completed</option>
              </select>
            </div>
            <div className="form-control flex gap-3 mt-4">
              <button
                type="submit"
                className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white"
              >
                {isEditing ? "Update Task" : "Add Task"}
              </button>
              <button
                type="button"
                className="py-2 px-[1.3rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray"
                onClick={closeModal}
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
