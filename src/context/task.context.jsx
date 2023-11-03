import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

// creating database for data savings
const data = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const TaskProvider = ({ children }) => {
  // providing states for task components
  const [tasks, setTasks] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // add function for task
  const addTask = (taskToAdd) => {
    setTasks([...tasks, taskToAdd]);
  };

  // delete function for task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // edit function for task
  const editTask = (updatedTasks) => {
    setTasks(updatedTasks);

    // this step to restart the programs
    setEditTaskId(null);
    setIsEditing(false);
  };

  // passing the values to the app by provider component
  const initialValues = {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    editTask,
    isEditing,
    setIsEditing,
    editTaskId,
    setEditTaskId,
  };

  return (
    <TaskContext.Provider value={initialValues}>
      {children}
    </TaskContext.Provider>
  );
};

//custom hook
const useTaskContext = () => {
  return useContext(TaskContext);
};

export { TaskProvider, useTaskContext };
