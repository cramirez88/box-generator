import React, {useState} from 'react'

export default function NinjaForm(props) {
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const {boxSize, setBoxSize} = props
  const submitHandler = (e) => {
    e.preventDefault()
    setBoxSize([...boxSize, {
      color: color,
      size: size + 'px'
    }])
    setSize('')
    setColor('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Size</label>
        <input type={'text'} onChange={(e) => setSize(e.target.value)} value={size}></input>
        <label>Color:</label>
        <input type={'text'} onChange={e => setColor(e.target.value)} value={color}></input>
        <button>Add</button>
      </form>
    </div>
  )
}
