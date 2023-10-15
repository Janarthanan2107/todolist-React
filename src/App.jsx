import { useState } from "react";
import { Task, Model } from "./component";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";

// styles
import "./App.css";

const App = () => {
  // model window state
  const [isModelOpen, setIsModelOpen] = useState(false);

  const modelOpen = () => {
    setIsModelOpen(true);
  };

  const modelClose = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="bg-paleBlue h-screen font-poppins mx-auto">
        <div className="flex flex-col justify-center items-center py-5 content">
          <div className="w-[65%]">
            <h1 className="text-[2.5rem] font-bold text-darkGray text-center">
              TODO LIST
            </h1>

            {/* add to list */}
            <div className="mt-6 flex justify-between items-center w-full">
              <button
                className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white"
                onClick={modelOpen}
              >
                Add Task
              </button>
              {/* filter Option */}
              <select className="py-2 px-[1rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray">
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Completed</option>
              </select>
            </div>
            <Task />
            <Model isModelOpen={isModelOpen} modelClose={modelClose}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
