import React, { useRef } from 'react';
import "../styles/Sidebar.css"

const Sidebar = ({tasks, setTasks, taskStatus, setTaskStatus}) => {
  const ref = useRef(null);

  const addTask = (e) => {
    e.preventDefault()
    const newTask = {
      data: ref.current.value,
      isComplete: false,
    }

    const arr = [...tasks, newTask]
    setTasks(arr)

    const newStatus = [taskStatus[0] + 1, taskStatus[1]]
    setTaskStatus(newStatus)
  }

  return (
    <div className="sidebar">
      <div className="sidebar__form">
        <form>
          <label className="sidebar__label">Task description:</label>
          <textarea className="sidebar__text-area" ref={ref}></textarea>
          <button className="sidebar__btn" onClick={addTask}>Add task</button>
        </form>
      </div>
      <div className="sidebar__info">
        <div className="sidebar__info-container">
          <div className="sidebar__title">Remaining tasks</div>
          <div className="sidebar__text">
            {taskStatus[0]}
          </div>
        </div>
        <div className="sidebar__info-container">
          <div className="sidebar__title">Completed tasks</div>
          <div className="sidebar__text">
            {taskStatus[1]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
