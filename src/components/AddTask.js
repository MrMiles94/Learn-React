import { useState } from "react"
const AddTask = ( { onAdd}) => {
  //Add task state data
  const [text, editText] =useState('')
  const [day, editDay] =useState('')
  const [reminder, editReminder] =useState(true)
  // to handle task submission
  const onClick=()=>{
    if(!text){
      alert('PLease enter a text!')
      return
    }else{
      onAdd({text, day,reminder})
      editText('')
      editDay('')
      editReminder(false)
    }
  }
  return (
    <form className="add-form">
      <div className="form-control" >
            <label>Add Task</label>
            <input type='text' placeholder="Add Task" value={text} 
            onChange={(e)=>editText(e.target.value)}
            />
      </div>
      <div className="form-control">
            <label>Add Day</label>
            <input type='text' placeholder="Add Day" value={day} 
            onChange={(e)=>editDay(e.target.value)}
            />
      </div>
      <div className="form-control form-control-check">
            <label>Add Task</label>
            <input type='checkbox' placeholder="Add Task" checked={reminder} 
            onChange={(e)=>editReminder( e.currentTarget.checked)}
            />
      </div>
      <button type="button" value='Save Task'
        onClick={onClick} className="btn btn-block"
        >Save Task</button>
    </form>
  )
}

export default AddTask
