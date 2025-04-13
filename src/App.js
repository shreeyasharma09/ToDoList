import React, { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = (name, priority) => {
    const newTodo = {
      id: Date.now(),
      name,
      priority
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const getMissingPriorities = () => {
    if (todos.length === 0) return [];
  
    const priorities = todos.map(todo => todo.priority);
    const maxPriority = Math.max(...priorities);
    const missing = [];
  
    for (let i = 1; i < maxPriority; i++) {
      if (!priorities.includes(i)) {
        missing.push(i);
      }
    }
  
    return missing;
  };
  

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <h3>Missing Priorities:</h3>
      <p>{getMissingPriorities().length > 0 ? getMissingPriorities().join(', ') : 'None'}</p>
    </div>
  );
};

export default App;
