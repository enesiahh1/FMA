import React from "react";
import ToDoItem from "./ToDoIteam";

const ToDoList = ({ tasks, toggleCompleted, updateTask, filterTasks }) => {
    return (
        <div>
            <div className="button-group">
                <button
                    type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks("today")}
                >
                    Today
                </button>
                <button
                    type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks("tomorrow")}
                >
                    Tomorrow
                </button>
                <button
                    type="button"
                    className="btn btn-primary-outline btn-all"
                    onClick={() => filterTasks("yesterday")}
                >
                    Yesterday
                </button>
            </div>
            <ul id="task-list" className="row-direction">
                {tasks.map((task, index) => (
                    <ToDoItem
                        task={task}
                        key={index}
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