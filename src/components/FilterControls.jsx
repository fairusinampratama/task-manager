function FilterControls({ currentFilter, onSetFilter }) {
  const filters = ["All", "Pending", "Completed"];

  return (
    <div className="bg-white p-3 rounded-lg shadow-md mb-6 flex items-center justify-center space-x-2 sm:space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSetFilter(filter)}
          className={`
            px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300
            ${
              currentFilter === filter
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterControls;
