// Task.js

import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-semibold">{task.name}</h2>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">Due Date: {task.dueDate}</p>
      <p className="text-gray-600">Priority: {task.priority}</p>
      <p className="text-gray-600">Category: {task.category}</p>
      <button
        onClick={() => onEdit(task)}
        className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
