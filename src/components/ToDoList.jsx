// src/components/ToDoList.jsx
import React, { useState } from 'react';
import './ToDoList.css'; // Optional: Include styling

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [task, setTask] = useState(''); // State for input value

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]); // Add new task to the task list
      setTask(''); // Clear the input field
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
