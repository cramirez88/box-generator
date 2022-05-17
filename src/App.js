import React, { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display';





function App() {
  // When user enters a color in the input field, create a box of that color and show all boxes. 
  const [boxColor, setBoxColor] = useState([])
  return (
    <>
    <Form boxColor={boxColor} setBoxColor={setBoxColor}/>
    <Display boxColor={boxColor}/>
    </>

  )
}

export default App;
