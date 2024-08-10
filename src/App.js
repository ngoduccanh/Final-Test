import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AllTodos from './components/AllTodos';
import ActiveTodos from './components/ActiveTodos';
import CompletedTodos from './components/CompletedTodos';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <Router>
        <h1>Todo App</h1>
        <nav>
          <NavLink to="/all" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
          <NavLink to="/active" className={({ isActive }) => (isActive ? 'active' : '')}>Active</NavLink>
          <NavLink to="/completed" className={({ isActive }) => (isActive ? 'active' : '')}>Completed</NavLink>
        </nav>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
        <Routes>
          <Route
            path="/all"
            element={<AllTodos todos={todos} onComplete={toggleTodo}  />}
          />
          <Route
            path="/active"
            element={<ActiveTodos todos={todos} onComplete={toggleTodo}  />}
          />
          <Route
            path="/completed"
            element={<CompletedTodos todos={todos} onComplete={toggleTodo} onDeleteAll={deleteAllTodos} />}
          />
          <Route
            path="*"
            element={<AllTodos todos={todos} onComplete={toggleTodo} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;