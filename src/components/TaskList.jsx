// src/components/TaskList.jsx

// This component represents a single, upgraded task card
function TaskItem({ task, onToggleStatus, onDeleteTask }) {
  const isCompleted = task.status === "Selesai";

  return (
    // The entire card has a hover effect now
    <div
      className={`
        bg-white p-4 rounded-lg shadow-md flex items-center justify-between gap-4 
        transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 border-l-4 
        ${isCompleted ? "border-green-500" : "border-indigo-500"}
      `}
    >
      <div className="flex-1">
        <h3
          className={`font-bold text-lg text-slate-800 ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
        <p
          className={`text-sm text-gray-600 ${
            isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {task.description}
        </p>
      </div>

      {/* Action buttons with icons and improved styling */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onToggleStatus(task.id)}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isCompleted
              ? "text-gray-400 hover:bg-gray-200"
              : "text-green-500 hover:bg-green-100"
          }`}
          aria-label={
            isCompleted ? "Mark as not completed" : "Mark as completed"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="p-2 text-red-500 rounded-full hover:bg-red-100 transition-colors duration-200"
          aria-label="Delete task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// This component holds the list of all tasks
function TaskList({ tasks, onToggleStatus, onDeleteTask }) {
  // Upgraded "empty state" message
  if (tasks.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          No Tasks Found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by adding a new task above.
        </p>
      </div>
    );
  }

  // Render the list of upgraded task items
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-700 px-2">Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
