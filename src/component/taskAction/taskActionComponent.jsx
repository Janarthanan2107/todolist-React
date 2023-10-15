import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";

const TaskAction = ({ id, isEditing, setIsEditing, modelOpen }) => {
  // console.log("isEditing:", isEditing);
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // console.log("existing Task", tasks);

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    console.log(remainingTasks);

    //update the task to local storage
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));
  };

  const editModelOpen = (id) => {
    setIsEditing(!isEditing);
    if (isEditing) {
      modelOpen();
      
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 p-2">
        <div
          className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray cursor-pointer"
          onClick={() => deleteTask(id)}
        >
          <BiSolidTrashAlt onClick={() => deleteTask(id)} />
        </div>
        <div
          className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray cursor-pointer"
          onClick={() => editModelOpen(id)}
        >
          <BiSolidPencil onClick={() => editModelOpen(id)} />
        </div>
      </div>
    </>
  );
};

export default TaskAction;
