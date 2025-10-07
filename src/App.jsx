// src/App.jsx
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterControls from "./components/FilterControls";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "Belum Selesai",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Selesai" ? "Belum Selesai" : "Selesai",
            }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") {
      return task.status === "Selesai";
    }
    if (filter === "Pending") {
      return task.status === "Belum Selesai";
    }
    return true;
  });

  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800 flex flex-col">
      <header className="bg-slate-900 text-white p-5 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto max-w-2xl flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">Task Manager</h1>
          <div className="bg-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            {filteredTasks.length} {filter !== "All" && `/ ${tasks.length}`}{" "}
            Tasks
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 max-w-2xl animate-[fadeIn_0.5s_ease-in-out] space-y-6 flex-grow">
        <TaskForm onAddTask={handleAddTask} />
        <FilterControls currentFilter={filter} onSetFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggleStatus={handleToggleStatus}
          onDeleteTask={handleDeleteTask}
        />
      </main>

      <footer className="w-full p-6 text-center">
        <p className="text-sm text-gray-500">
          <a
            href="https://github.com/fairusinampratama"
            target="_blank"
            rel="noopener noreferrer"
            // Use inline-flex to align the icon and text
            className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:underline"
          >
            {/* --- GITHUB ICON SVG --- */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            {/* --- END OF ICON --- */}
            fairusinampratama
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
