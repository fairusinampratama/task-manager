// src/components/TaskForm.jsx
import { useState, useRef, useEffect } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // New state to handle validation errors
  const [error, setError] = useState("");

  // useRef to get direct access to the title input element
  const titleInputRef = useRef(null);

  // useEffect to focus the title input when the component first renders
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      // Set the error message instead of showing an alert
      setError("Task title is required.");
      return;
    }

    onAddTask(title, description);
    setTitle("");
    setDescription("");
    // Ensure the title input is focused again for the next task
    titleInputRef.current.focus();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // Clear the error message as soon as the user starts typing
    if (error) {
      setError("");
    }
  };

  return (
    // Added a subtle animation for the form appearing
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg mb-8 animate-[fadeIn_0.5s_ease-in-out]"
    >
      <h2 className="text-xl font-bold mb-5 text-slate-700">Add a New Task</h2>

      {/* Container for inputs */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Title
          </label>
          <input
            ref={titleInputRef} // Attach the ref here
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-indigo-500"
            }`}
            placeholder="e.g., Mendesain logo baru"
          />
          {/* Conditionally render the error message */}
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Description (Optional)
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Membuat 3 mockup untuk review"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2.5 px-4 rounded-md hover:bg-indigo-700 font-semibold transition-all duration-300 transform hover:scale-[1.03]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
