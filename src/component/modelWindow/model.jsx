import { LiaTimesSolid } from "react-icons/lia";
import "../modelWindow/model.css";

const Model = () => {
  return (
    <div className="overlay close">
      <div className="model-container">
        <div className="bg-lightGray p-5 w-[500px] rounded-lg relative">
          <div className="flex justify-between">
            <p className="text-[1.2rem] font-semibold text-darkGray">
              Add TODO
            </p>
            <span className="bg-iconBg p-2 rounded-sm text-[1.1rem] text-lightDarkGray cursor-pointer absolute -top-11 right-2 hover:bg-red-500 hover:text-white">
              <LiaTimesSolid />
            </span>
          </div>
          <form className="mt-5 flex flex-col gap-5">
            <div className="form-control">
              <label htmlFor="title" className="font-medium text-darkGray">
                Title
              </label>
              <input
                type="text"
                name="title"
                id=""
                className="py-3 px-2 w-full"
              />
            </div>
            <div className="form-control">
              <label htmlFor="Status" className="font-medium text-darkGray">
                Status
              </label>
              <select type="text" name="Status" className="py-3 px-2 w-full">
                <option value="Incomplete" selected>
                  Incomplete
                </option>
                <option value="Complete">Completed</option>
              </select>
            </div>
            <div className="form-control flex gap-3 mt-4">
              <button className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white">
                Add Task
              </button>
              <button className="py-2 px-[1.3rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray">
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
