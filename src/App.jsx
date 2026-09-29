import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter(
      (item, itemIndex) => itemIndex !== index
    );

    setTasks(newTasks);
  }

  return (
    <div className="task-app">
      <div className="task-container">

        <div className="task-header">
          <p className="task-label">DAILY PRODUCTIVITY</p>

          <h1 className="task-title">
            Personal Task Manager
          </h1>

          <p className="task-description">
            Organize your day, one task at a time.
          </p>
        </div>

        <div className="task-input-area">
          <input
            className="task-input"
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={handleTaskChange}
          />

          <button
            className="add-button"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <div className="task-summary">
          <span className="summary-text">
            Total Tasks
          </span>

          <strong className="task-count">
            {tasks.length}
          </strong>
        </div>

        <div className="task-list">
          {tasks.map((item, index) => (
            <div className="task-item" key={index}>

              <div className="task-content">
                <span className="task-number">
                  {index + 1}
                </span>

                <span className="task-text">
                  {item}
                </span>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;