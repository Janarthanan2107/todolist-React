import { Task, Model, Controls } from "./component";
import { Toaster } from "react-hot-toast";

// styles
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

            {/* add to list */}
            {/* controls  */}
            <Controls />
            <Task />
            <Model />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
