function Button(props){

  return (
    <button type="button" className={props.type === 'secondary' ? 'secondary': 'primary'}>Click me</button>
  )
}

export default Button;