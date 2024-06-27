import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date && time) {
      addTask({ task, date, time, isImportant, color, isCompleted: false });
      setTask('');
      setDate('');
      setTime('');
      setIsImportant(false);
      setColor('#000000');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
      />
      <label>
        Important
        <input 
          type="checkbox" 
          checked={isImportant} 
          onChange={(e) => setIsImportant(e.target.checked)} 
        />
      </label>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
