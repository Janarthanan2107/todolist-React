import { useEffect, useState } from "react";
import { Task, Model } from "./component";
import toast, { Toaster } from "react-hot-toast";

// styles
import "./App.css";

const App = () => {
  // tasks
  const [tasks, setTasks] = useState([]);
  // model window state
  const [isModelOpen, setIsModelOpen] = useState(false);
  // state for update
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const editTask = (taskId) => {
    setEditTaskId(taskId);
  };

  const modelOpen = () => {
    setIsModelOpen(true);
  };

  const modelClose = () => {
    setIsModelOpen(false);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    // console.log("existing Tasks", storedTasks);
  }, []);

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
            <Task
              tasks={tasks}
              setTasks={setTasks}
              modelOpen={modelOpen}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editTask={editTask}
            />
            <Model isModelOpen={isModelOpen} modelClose={modelClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
