import './App.css';
import React,{useState,useEffect} from 'react';
import TaskList from './components/TaskList'
import AddTask from './components/AddTask';
import { collection, getDocs } from "firebase/firestore"; 
import {db} from './utils/firebase'


function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const getData = async() => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({id:doc.id,task:doc.data().task});
      });
      setTasks(data);
    }
    getData();
  },[])

  return (
    <div className="App">
      <div className="todo">
        <div>
          <h2>Todo</h2>
          <hr />
          <TaskList tasks={tasks} setTasks={setTasks }/>
        </div> 
        <AddTask tasks={tasks} setTasks={setTasks }/>
      </div>
    </div>
  );
}

export default App;
