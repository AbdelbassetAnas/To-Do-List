import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import './TaskForm.css';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim(), category);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="form-control mb-3"
        />
        <div className="d-flex justify-content-between align-items-center">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control w-50 mr-2"
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center"
          >
            <PlusCircle className="mr-2" size={20} />
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
