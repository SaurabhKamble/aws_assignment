import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../utils/firebase'
import uuid from 'react-uuid';

const AddTask = ({tasks,setTasks}) => {

    const [task, setTask] = useState("");
    const addTaskClick = async() => {
        const id = uuid();
         setTasks(
            [...tasks, 
            {
                id: id,
                task:task
            }]
        )
        await setDoc(doc(db, "tasks", id), { task });
        setTask("");
    }

  return (
      <div className="add-task">
          <input type="text" className="add-input" value={task} onChange={(e)=>setTask(e.target.value)}/>
          <i className="fa fa-plus-circle fa-2x add-button" aria-hidden="true" onClick={()=>addTaskClick()}></i>
    </div>
  )
}

export default AddTask