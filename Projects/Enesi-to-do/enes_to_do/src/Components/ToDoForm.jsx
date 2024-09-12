import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [datetime, setDatetime] = useState("");
    const [isImportant, setIsImportant] = useState(false);
    const [color, setColor] = useState("#000000");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && datetime) {
            addTask({ task, datetime, isImportant, color });
            setTask("");
            setDatetime("");
            setIsImportant(false);
            setColor("#000000");
        }
    };
    return (
        <div>
            <form id="todo-form m-1 p-1" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="task">Task</label>
                    <input
                        type="text"
                        id="task"
                        name="task"
                        placeholder="Enter your task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="datetime">Date and Time</label>
                    <input
                        type="datetime-local"
                        id="datetime"
                        name="datetime"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                    />
                </div>
                <div className="row form-group-row">
                    <div className="form-group checkbox-wrapper">
                        Important
                        <input
                            type="checkbox"
                            id="important"
                            name="important"
                            checked={isImportant}
                            onChange={(e) => setIsImportant(e.target.checked)}
                        />
                        <label for="important">
                            <span className="tick_mark"></span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label for="color" className="color-label">
                            Color
                        </label>
                        <input
                            type="color"
                            id="color"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    ADD NEW TASK
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;
