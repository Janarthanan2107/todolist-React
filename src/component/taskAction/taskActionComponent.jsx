import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";
import toast from "react-hot-toast";

// import the both model for task and model from context
import { useTaskContext } from "../../context/task.context";
import { useModalContext } from "../../context/modal.context";

const TaskAction = ({ id }) => {

  // access function value from the context 
  const { deleteTask, setIsEditing, setEditTaskId } = useTaskContext();
  const { openModal } = useModalContext();

  // delete function
  const handleDeleteTask = (id) => {
    deleteTask(id);
    toast.success("Successfully Deleted!");
  };

  // edit function 
  const editModelOpen = (id) => {
    setIsEditing(true);
    setEditTaskId(id);
    openModal();
  };

  return (
    <>
      {/* Actions for edit and delete */}
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
