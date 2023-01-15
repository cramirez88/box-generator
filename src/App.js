import React, {useState} from 'react'
import Display from './components/Display';
import DisplayNinja from './components/DisplayNinja';
import Form from './components/Form';
import NinjaForm from './components/NinjaForm';





function App() {
  const [boxColor, setBoxColor] = useState([])
  
  const [boxSize, setBoxSize] = useState([])
  return (
    <>
    <Form boxColor={boxColor} setBoxColor={setBoxColor}/>
    <Display boxColor={boxColor} setBoxColor={setBoxColor}/>
    <NinjaForm boxSize={boxSize} setBoxSize={setBoxSize} boxColor={boxColor} setBoxColor={setBoxColor}/>
    <DisplayNinja boxSize={boxSize} setBoxSize={setBoxSize} boxColor={boxColor} setBoxColor={setBoxColor} />
    </>

  )
}

export default App;
