import toast, { Toaster } from "react-hot-toast";
import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";

import "./App.css";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="bg-paleBlue h-screen font-poppins mx-auto">
        <div className="flex flex-col justify-center items-center py-5 content">
          <div className="w-[65%]">
            <h1 className="text-[2.5rem] font-bold text-darkGray text-center">
              TODO LIST
            </h1>

            {/* list to add */}
            <div className="mt-6 flex justify-between items-center w-full">
              <button className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white">
                Add Task
              </button>
              <select className="py-2 px-[1rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray">
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Completed</option>
              </select>
            </div>

            <div className="mt-3 p-5 flex justify-between items-center bg-lightGray rounded-lg w-full">
              <div className="bg-white rounded-sm w-full flex items-center">
                <div className="flex justify-between items-center w-full">
                  {/* task-section */}
                  <div className="flex items-center gap-3 p-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-[1.5rem] h-[1.5rem] bg-lightGray"
                    />
                    <span>
                      <p className="text-[14px] text-lightDarkGray font-medium">
                        Task - 1
                      </p>
                      <p className="text-[12px] text-lightDarkGray">
                        10.15 PM, 13/10/2023
                      </p>
                    </span>
                  </div>
                  {/* action-section */}
                  <div className="flex items-center gap-3 p-2">
                    <div className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray">
                      <BiSolidTrashAlt />
                    </div>
                    <div className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray">
                      <BiSolidPencil />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
