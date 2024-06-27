import React from 'react';

const ToDoItem = ({ task, index, removeTask }) => {
  return (
    <li>
      {task.task} - {task.date} {task.time}
      <button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
};

export default ToDoItem;
