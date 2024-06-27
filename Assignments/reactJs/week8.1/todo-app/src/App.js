import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
    const today = new Date();
    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      if (filterType === 'yesterday') {
        return taskDate.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString();
      } else if (filterType === 'today') {
        return taskDate.toDateString() === new Date().toDateString();
      } else if (filterType === 'tomorrow') {
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        return taskDate.toDateString() === tomorrow.toDateString();
      } else {
        return true;
      }

    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={filteredTasks.length ? filteredTasks : tasks} removeTask={removeTask} filterTasks={filterTasks} />
      </header>
    </div>
  );
}

export default App;
