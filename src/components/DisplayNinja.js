import React from 'react'

export default function DisplayNinja(props) {
  const {boxSize, setBoxSize, boxColor} = props
  return (
    <div>
      {
        boxSize.map((size, index) => {
          return (
            <div key={index} style={{width: size, height: size, backgroundColor: boxColor, display: 'inline-block', margin: '10px'}}></div>
          )
        })
      }
    </div>
  )
}
