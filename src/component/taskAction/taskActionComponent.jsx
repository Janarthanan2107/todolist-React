import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";

const TaskAction = () => {
  return (
    <>
      <div className="flex items-center gap-3 p-2">
        <div className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray">
          <BiSolidTrashAlt />
        </div>
        <div className="bg-iconBg p-2 rounded-md text-[1.1rem] text-lightDarkGray">
          <BiSolidPencil />
        </div>
      </div>
    </>
  );
};

export default TaskAction;
