function ToDoTasks() {
    return (
        <>
            <div className="col left-shadow p-4">
                <h1>Tasks:</h1>
                <hr />
                <div className="m-0">
                    <button className="btn right-shadow">Yesterday</button>
                    <button className="btn right-shadow">Today</button>
                    <button className="btn right-shadow">Tomorrow</button>
                    <button className="btn right-shadow">All</button>
                </div>
                <div className='col just-between'>
                    <h3>First Task</h3>
                </div>
            </div>
        </>
    )
}

export default ToDoTasks;