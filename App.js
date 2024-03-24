import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 class="pop-up-text">To-Do List</h1>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Add a new todo"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={todo.completed ? 'completed' : ''}
              onClick={() => handleToggleTodo(index)}
            >
              {todo.text}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;