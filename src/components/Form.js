import React, { useState } from 'react'


const Form = (props) => {
  const [color, setColor] = useState('')
  
  const {boxColor, setBoxColor} = props

  const handleSubmit = e => {
    e.preventDefault();
    setBoxColor([...boxColor, color])
    setColor('')
  }



  return (
    <>
    <form onSubmit = {handleSubmit}>
    <div>
      <label htmlFor='color'>Color</label>
      <input type='text' onChange = {e => setColor(e.target.value)} value={color}></input>
    </div>
    <button>Add</button>
    </form>
    
    
    </>
  )
}


export default Form;