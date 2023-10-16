import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";
import toast from "react-hot-toast";

import { useTaskContext } from "../../context/task.context";
import { useModalContext } from "../../context/modal.context";

const TaskAction = ({ id }) => {
  const { deleteTask, setIsEditing, setEditTaskId } = useTaskContext();
  const { openModal } = useModalContext();
  const handleDeleteTask = (id) => {
    deleteTask(id);
    toast.success("Successfully Deleted!");
  };

  const editModelOpen = (id) => {
    setIsEditing(true);
    setEditTaskId(id);
    openModal();
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
