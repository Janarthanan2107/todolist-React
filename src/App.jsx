const App = () => {
  return (
    <div className="bg-paleBlue h-screen font-poppins mx-auto container">
      <div className="flex flex-col justify-center items-center py-5">
        <h1 className="text-[2.5rem] font-bold text-darkGray">TODO LIST</h1>

        {/* list to add */}
        <div className="mt-6 flex justify-between items-center w-full">
          <button className="py-2 px-[1.3rem] text-[1rem] font-medium bg-skyBlue rounded-md text-white">
            Add Task
          </button>
          <select className="py-2 px-[1rem] text-[1rem] font-medium bg-paleGray rounded-md text-darkGray">
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Completed</option>
          </select>
        </div>

        <div className="mt-3 p-5 flex justify-between items-center bg-lightGray rounded-lg w-full">
          <div class="bg-white rounded-sm w-full flex items-center">
            <div class="flex justify-between items-center">
              <div class="flex items-center p-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="w-[1.5rem] h-[1.5rem] bg-lightGray"
                />
                <p>Task - 1</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
