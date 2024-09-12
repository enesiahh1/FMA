import React, { useState } from "react";

const ToDoItem = ({ task, index, toggleCompleted, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
    const [editedDatetime, setEditedDatetime] = useState(task.datetime);
    const [editedIsImportant, setEditedIsImportant] = useState(task.isImportant);
    const [editedColor, setEditedColor] = useState(task.color);

    const handleSave = () => {
        updateTask(index, {
            task: editedTask,
            datetime: editedDatetime,
            isImportant: editedIsImportant,
            color: editedColor,
            isCompleted: task.isCompleted,
        });
        setIsEditing(false);
    };
    return (
        <li
            style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
                color: task.color,
            }}
        >
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedDatetime}
                        onChange={(e) => setEditedDatetime(e.target.value)}
                    />

                    <label>
                        Important
                        <input
                            type="checkbox"
                            checked={editedIsImportant}
                            onChange={(e) => setEditedIsImportant(e.target.checked)}
                        />
                    </label>
                    <input
                        type="color"
                        value={editedColor}
                        onChange={(e) => setEditedColor(e.target.value)}
                    />
                    <div className="task-icones">
                        <button onClick={handleSave}>
                            {" "}
                            <span className="material-icons save">save</span>
                        </button>

                        <button onClick={() => setIsEditing(false)}>
                            <span className="material-icons cancel">block</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    {task.task} - {task.datetime}
                    {task.isImportant && <strong> (Important) </strong>}
                    <div className="task-icones">
                        <button onClick={() => toggleCompleted(index)}>
                            <span className="material-icons verified">verified</span>
                        </button>
                        <button onClick={() => setIsEditing(true)}>
                            {" "}
                            <span className="material-icons edit">edit</span>
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default ToDoItem;