import React, {useState} from 'react'


const Form = (props) => {
  const [color, setColor] = useState('')
  const {boxColor, setBoxColor} = props
  

  const submitHandler = (e) => {
    e.preventDefault()
    setBoxColor([...boxColor, color])
    setColor('')
  }
  return(
    <div>
      <form onSubmit={submitHandler}>
        <label>Color</label>
        <input type={'text'} onChange={(e) => setColor(e.target.value)} value={color}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form