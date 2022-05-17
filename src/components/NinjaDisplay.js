import React from "react";



const NinjaDisplay = props => {
  const {boxColor} = props
  return (
    <>
    {boxColor.map((box, index) => (
      <div key={index} style={{
        display: 'inline-block',
        margin: '10px',
        height: box.size,
        width: box.size,
        backgroundColor: box.color
      }}>

      </div>
    ))
    }
    
    
    
    </>
  )
}

export default NinjaDisplay;