import TaskAction from "../taskAction/taskActionComponent";
import TaskContent from "../taskContent/taskContentComponent";

const Task = () => {
  return (
    <>
      <div className="mt-3 p-5 flex justify-between items-center bg-lightGray rounded-lg w-full">
        <div className="bg-white rounded-sm w-full flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* task-section */}
            <TaskContent />
            {/* action-section */}
            <TaskAction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
