import TaskAction from "../taskAction/taskActionComponent";
import TaskContent from "../taskContent/taskContentComponent";

const Task = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  console.log("existing Task", tasks);

  return (
    <>
      <div className="mt-3 p-5 flex flex-col gap-3 justify-between items-center bg-lightGray rounded-lg w-full">
        {tasks.map((task) => {
          // destructure the array
          const { id, title, status } = task;
          return (
            <div
              className="bg-white rounded-[5px] w-full flex items-center"
              key={id}
            >
              <div className="flex justify-between items-center w-full">
                {/* task-section */}
                <TaskContent title={title} status={status} />
                {/* action-section */}
                <TaskAction />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Task;
