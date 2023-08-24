// App.js

import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const initialTasks = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      dueDate: '2023-08-25',
      priority: 'High',
      category: 'Work',
    },
    // Add more tasks here
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [editedTask, setEditedTask] = useState(null);

  // Function to handle editing a task
  const handleEdit = (task) => {
    setEditedTask(task);
  };

  // Function to save the edited task
  const handleSave = (editedTaskData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editedTaskData.id ? editedTaskData : task
      )
    );
    setEditedTask(null);
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditedTask(null);
  };

  // Function to handle deleting a task
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Task List</h1>
      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        editedTask={editedTask}
        onSave={handleSave}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default App;
