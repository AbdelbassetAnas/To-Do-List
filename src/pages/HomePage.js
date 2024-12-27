import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask, setFilter } from '../store/taskSlice';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import TaskFilter from '../components/TaskFilter';

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const handleAddTask = (title, category) => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        category,
        completed: false,
        createdAt: new Date().toISOString(),
      })
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="Home">Personal Task Tracker</h1>

      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter
        currentFilter={filter}
        onFilterChange={(newFilter) => dispatch(setFilter(newFilter))}
      />

      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={(id) => dispatch(toggleTask(id))}
            onDelete={(id) => dispatch(deleteTask(id))}
          />
        ))}
        {filteredTasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No tasks found. Add some tasks to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;