import React from 'react';
import TodoItem from './TodoItem';

const ActiveTodos = ({ todos, onComplete, }) => {
  const activeTodos = todos.filter(todo => !todo.completed);
  return (
    <div>
      {activeTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default ActiveTodos;