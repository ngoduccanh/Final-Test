import React from 'react';
import TodoItem from './TodoItem';

const CompletedTodos = ({ todos, onComplete, onDeleteAll }) => {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div>
      {completedTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
        />
      ))}
      {completedTodos.length > 0 && (
        <button onClick={onDeleteAll}>Delete All</button>
      )}
    </div>
  );
};

export default CompletedTodos;