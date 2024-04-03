function Button({ text, color, onClick }) {
  return (
  <button 
  onClick={ onClick }  
  className="btn" 
  style={{ backgroundColor:color }}
  >{text}</button>
  )
}
Button.defaultProps={
    color:'steel'
}
Button.propsType={
    text: String,
    color: String,
}

export default Button
