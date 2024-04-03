import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App =()=> {
  const [showAddTask, setAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      id:1,
      text: "Doctor's Appointment",
      day: " Feb 5th at 2:30pm",
      reminder: true
  },
  {
      id:2,
      text: "Meeting at school",
      day: " Feb 6th at 5:30pm",
      reminder: true
  },
  {
      id:3,
      text: "Food shoping",
      day: " Feb 10th at 8:00am",
      reminder: false
  },
  ])
  //delete task function

  const deleteTask = (id)=>{
    setTask(tasks.filter((task)=>(task.id !== id)))
  }
  const toggleRiminder =(id)=>{
    setTask(tasks.map((task)=>(task.id ===id) ? {...task, reminder: !task.reminder}: task))
  }
  
  // function to add a task
  const saveTask =(task)=>{
    setTask([...tasks, task])
  }
  
  return (
    <div className="container">
      <Header  title='Task  Tracker' toggleAddTaskColor={ showAddTask} 
      onClick={()=>setAddTask(!showAddTask)}/>
      { showAddTask && <AddTask  onAdd={saveTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} dbClick={toggleRiminder}/>
    </div>
  );
}

export default App;
