import React from 'react'

const TaskItem = ({ task,handleDelete }) => {
  return (
    <div className="task-item" onClick={()=>handleDelete(task)}>
          {task.task}
    </div>
  )
}

export default TaskItem