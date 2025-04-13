import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ({ todos, deleteTodo }) => {
  const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);

  return (
    <div>
      <h2>Tasks</h2>
      {sortedTodos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul>
          {sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      )}
    </div>
  );
};


export default TodoList;
