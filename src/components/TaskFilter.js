import React from 'react';
import './TaskFilter.css';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="task-filter mb-4">
      <button
        onClick={() => onFilterChange('all')}
        className={`btn ${
          currentFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        className={`btn ${
          currentFilter === 'active' ? 'btn-primary' : 'btn-outline-primary'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`btn ${
          currentFilter === 'completed' ? 'btn-primary' : 'btn-outline-primary'
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
