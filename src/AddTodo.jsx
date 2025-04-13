import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !priority) {
      alert('Please enter both a task and a priority.');
      return;
    }
    addTodo(name, parseInt(priority));
    setName('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
