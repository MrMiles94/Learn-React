import Button from "./Button"

function Header ({ title , showAddTaskColor, onClick}) {
 
  return (
    <header className="header" >
      <h1>{title}</h1>
      <Button color={!showAddTaskColor ? 'green' : 'red'} 
      text={!showAddTaskColor ? 'Add' : 'Close'} onClick={onClick} />
    </header>
  )
}
export default Header
