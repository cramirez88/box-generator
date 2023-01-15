import React, {useState} from 'react'

export default function NinjaForm(props) {
  const [size, setSize] = useState('')
  const {boxSize, setBoxSize} = props

  const submitHandler = (e) => {
    e.preventDefault()
    setBoxSize([...boxSize, size + 'px'])
    setSize('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Size</label>
        <input type={'text'} onChange={(e) => setSize(e.target.value)} value={size}></input>
        <button>Add</button>
      </form>
    </div>
  )
}
