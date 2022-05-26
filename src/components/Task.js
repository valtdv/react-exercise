import React, { useState, useEffect } from 'react';
import "../styles/Task.css"

const Task = ({index, task, tasks, setTasks, taskStatus, setTaskStatus}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const markTaskAsComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        task =  {...task, isComplete: true}  
      }
      return task
    })
    setTasks(newTasks)

    const newStatus = [taskStatus[0] - 1, taskStatus[1] + 1]
    setTaskStatus(newStatus)
    
    setIsActive(true)
  }

  return (
    <div className="task">
      <p className={'task__content ' + (task.isComplete ? 'complete-task' : '')}>
        {task.data}
      </p>
      <footer className='task__footer'>
        {task.isComplete ? <p className='task__timer'>Completed {seconds}s ago</p> : <button className='task__btn' onClick={() => markTaskAsComplete(index)}>Mark as complete</button>}
      </footer>
    </div>
  )
}

export default Task;
