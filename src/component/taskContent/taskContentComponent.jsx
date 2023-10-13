const TaskContent = () => {
  return (
    <>
      <div className="flex items-center gap-3 p-2">
        <input
          type="checkbox"
          name=""
          id=""
          className="w-[1.5rem] h-[1.5rem] bg-lightGray"
        />
        <span>
          <p className="text-[14px] text-lightDarkGray font-medium">Task - 1</p>
          <p className="text-[12px] text-lightDarkGray">10.15 PM, 13/10/2023</p>
        </span>
      </div>
    </>
  );
};

export default TaskContent;
