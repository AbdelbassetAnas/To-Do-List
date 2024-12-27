import React from 'react';
import { Check, Trash2, Circle } from 'lucide-react';
import './TaskItem.css';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : 'incomplete'}`}>
      <div className="d-flex align-items-center">
        <button
          onClick={() => onToggle(task.id)}
          className={`task-checkbox ${task.completed ? 'text-success' : 'text-muted'}`}
        >
          {task.completed ? <Check size={20} /> : <Circle size={20} />}
        </button>
        <span className={`task-title ${task.completed ? 'completed' : ''}`}>
          {task.title}
        </span>
      </div>
      <div className="task-actions">
        <span className="task-category">{task.category}</span>
        <button onClick={() => onDelete(task.id)} className="delete-button">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
