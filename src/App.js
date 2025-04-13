import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, priority) => {
    const newTodo = {
      id: Date.now(),
      name,
      priority
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
