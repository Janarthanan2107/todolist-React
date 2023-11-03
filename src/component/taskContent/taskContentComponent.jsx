import { useEffect, useState } from "react";

const TaskContent = ({ title, status, formattedDate }) => {
  const [isChecked, setIsChecked] = useState(status === "Complete");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex items-center gap-3 p-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-[1.5rem] h-[1.5rem] bg-lightGray"
        />

        {/* The exact content to display of the task */}
        <span>
          <p
            className={`text-[14px] text-lightDarkGray font-medium ${
              isChecked === true ? "line-through" : ""
            }`}
          >
            {title}
          </p>
          <p className="text-[12px] text-lightDarkGray">{formattedDate}</p>
        </span>
      </div>
    </>
  );
};

export default TaskContent;
