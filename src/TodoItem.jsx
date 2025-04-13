import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
    return (
      <li>
        {todo.name} — Priority: {todo.priority}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
  };
  

export default TodoItem;
