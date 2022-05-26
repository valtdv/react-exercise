import React, { useState } from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState([0, 0]);

  return (
    <div className="App">
      <Sidebar tasks={tasks} setTasks={setTasks} taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
      <div className="task-container">
        {tasks.map((task, i) => {
          if (task.isComplete === false) 
            return <Task key={i} index={i} task={task} tasks={tasks} setTasks={setTasks} taskStatus={taskStatus} setTaskStatus={setTaskStatus} /> 
          })
        }
        {tasks.map((task, i) => {
          if (task.isComplete === true) 
            return <Task key={i} index={i} task={task} tasks={tasks} setTasks={setTasks} taskStatus={taskStatus} setTaskStatus={setTaskStatus} /> 
          })
        }
      </div>
    </div>
  );
}

export default App;
