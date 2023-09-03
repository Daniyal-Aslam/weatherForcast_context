import React from 'react' 

const Button = (props) => { 
  return (
    <>
    <button className='btn-primary' onClick={props.onClick} >{props.value}</button>
    </>
  )
}

export  default Button;