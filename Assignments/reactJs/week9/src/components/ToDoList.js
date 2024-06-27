import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleCompleted, updateTask, filterTasks }) => {
  return (
    <div>
      <div>
        <button onClick={() => filterTasks('all')}>All</button>
        <button onClick={() => filterTasks('yesterday')}>Yesterday</button>
        <button onClick={() => filterTasks('today')}>Today</button>
        <button onClick={() => filterTasks('tomorrow')}>Tomorrow</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem 
            key={index} 
            task={task} 
            index={index} 
            toggleCompleted={toggleCompleted} 
            updateTask={updateTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
