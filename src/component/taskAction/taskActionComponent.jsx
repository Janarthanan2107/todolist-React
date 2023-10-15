import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const TaskAction = ({
  id,
  tasks,
  setTasks,
  modelOpen,
  isEditing,
  setIsEditing,
  editTask
}) => {
  const handleDeleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));
    setTasks(remainingTasks);
    toast.success("Successfully Deleted!");
  };

  const editModelOpen = (id) => {
    setIsEditing(!isEditing);
    modelOpen();
    editTask(id)
  };

  return (
    <>
      <div className="flex items-center gap-3 p-2">
        <div
          className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray cursor-pointer"
          onClick={() => handleDeleteTask(id)}
        >
          <BiSolidTrashAlt />
        </div>
        <div
          className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray cursor-pointer"
          onClick={() => editModelOpen(id)}
        >
          <BiSolidPencil />
        </div>
      </div>
    </>
  );
};

export default TaskAction;
