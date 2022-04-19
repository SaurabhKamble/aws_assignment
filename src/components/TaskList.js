import React,{useState} from 'react'
import TaskItem from './TaskItem';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../utils/firebase'



const TaskList = ({tasks,setTasks}) => {

    const handleDelete = async (task)=>{
        const newTasks = tasks.filter(t => t.task !== task.task);
        setTasks(newTasks);
        console.log(newTasks);
        await deleteDoc(doc(db, "tasks", task.id));
    }
    
    return (
        <div className="task-list">
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={ task} handleDelete={handleDelete} / >
            })}
            
      </div>
  )
}

export default TaskList