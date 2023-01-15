import React from 'react'

export default function DisplayNinja(props) {
  const {boxSize, setBoxSize, boxColor} = props
  return (
    <div>
      {
        boxSize.map((size, index) => {
          return (
            <div key={index} style={{width:size.size, height: size.size, backgroundColor: size.color, display: 'inline-block', margin: '10px'}}></div>
          )
        })
      }
    </div>
  )
}
