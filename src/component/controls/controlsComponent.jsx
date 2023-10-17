import { useModalContext } from "./context/modal.context";

const Controls = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <div className="mt-6 flex justify-between items-center w-full">
        <button
          className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white"
          onClick={openModal}
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
    </>
  );
};

export default Controls;
