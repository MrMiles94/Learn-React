import Task from './Task'
const Tasks = ({ tasks, onDelete, dbClick} ) => {
  return (
    <>
        { tasks.length>0 ? tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} dbClick={dbClick} />
        )): <h4 >Nothing To Show!</h4>}
    </>
       
  )
}
Tasks.propTypes={
    tasks: Array,
}

export default Tasks
