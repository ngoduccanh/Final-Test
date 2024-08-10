import React from 'react';
import TodoItem from './TodoItem';

const AllTodos = ({ todos, onComplete,}) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default AllTodos;