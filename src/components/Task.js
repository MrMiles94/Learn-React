import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, dbClick }) => {
  return (
    <div onDoubleClick={()=>dbClick(task.id)} style={{borderLeft: task.reminder ? '5px solid green' : ''}}
    className={task.reminder ? 'reminder event' : 'event'}>
      <h3>{task.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={()=>onDelete(task.id)} />
        </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
