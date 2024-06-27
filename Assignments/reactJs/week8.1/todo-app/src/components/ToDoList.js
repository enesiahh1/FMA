import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, removeTask, filterTasks }) {

    return (
        <>
            <div>
                <button onClick={() => filterTasks('yesterday')} >Yesterday</button>
                <button onClick={() => filterTasks('today')} >Today</button>
                <button onClick={() => filterTasks('tomorrow')}>Tomorrow</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} index={index} removeTask={removeTask} />
                ))}
            </ul>
        </>
    );
}