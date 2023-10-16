import TaskAction from "../taskAction/taskActionComponent";
import TaskContent from "../taskContent/taskContentComponent";

import { useTaskContext } from "../../context/task.context";

const Task = () => {
  const { tasks } = useTaskContext();

  return (
    <>
      <div className="mt-3 p-5 flex flex-col gap-3 justify-between items-center bg-lightGray rounded-lg w-full">
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => {
              // destructure the array
              const { id, title, status, formattedDate } = task;
              return (
                <div
                  className="bg-white rounded-[5px] w-full flex items-center"
                  key={id}
                >
                  <div className="flex justify-between items-center w-full">
                    {/* task-section */}
                    <TaskContent
                      title={title}
                      status={status}
                      formattedDate={formattedDate}
                    />
                    {/* action-section */}
                    <TaskAction id={id} />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <p className="text-center text-lightDarkGray bg-listBg text-[1rem] rounded-md font-semibold py-2 px-3">
              No Tasks
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Task;
