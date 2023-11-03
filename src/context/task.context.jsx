import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

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

  const addTask = (taskToAdd) => {
    setTasks([...tasks, taskToAdd]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (updatedTasks) => {
    setTasks(updatedTasks);

    setEditTaskId(null);
    setIsEditing(false);
  };

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
