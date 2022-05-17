import React, { useState } from 'react'


const NinjaForm = props => {
  const {boxColor, setBoxColor} = props
  const [size, setSize] = useState(40)
  const [color, setColor] = useState('')

// form submission handler: when user submits a number and color a shape of that size in pixels will render


const NinjaHandler = e => {
  e.preventDefault()
  setBoxColor([...boxColor,
  {
    color: color,
    size: size + 'px'
  }])
  setSize(40)
  setColor('')
  
}

return (
  <>
  <form onSubmit={NinjaHandler}>
    <div>
      <label>Color</label>
      <input type='text' onChange = {e => setColor(e.target.value)} value={color}></input>
    </div>
    <div>
      <label>Size</label>
      <input type="text" onChange={e => setSize(e.target.value)} value={size}></input>
    </div>
    <button>Add</button>
  </form>
  </>
)
}

export default NinjaForm;