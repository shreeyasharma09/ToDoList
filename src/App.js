import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
