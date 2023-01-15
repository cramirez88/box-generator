import React from 'react'

const Display = (props) => {
  const {boxColor, setBoxColor} = props

  return (

    <div>
      {
        boxColor.map((box, index) => {
          return (
            <div style={{backgroundColor: box, width: '40px', height:'40px', margin:'20px', display: 'inline-block'}} key={index}></div>
          )
        })
      }
    </div>
  )
}

export default Display