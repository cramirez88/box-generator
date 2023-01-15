import React, {useState} from 'react'
import Display from './components/Display';
import Form from './components/Form';





function App() {
  const [boxColor, setBoxColor] = useState([])
  return (
    <>
    <Form boxColor={boxColor} setBoxColor={setBoxColor}/>
    <Display boxColor={boxColor} setBoxColor={setBoxColor}/>
    </>

  )
}

export default App;
