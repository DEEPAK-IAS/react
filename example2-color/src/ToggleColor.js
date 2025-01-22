import React from 'react'

const ToggleColor = ({textColor, setTextColor}) => {
  return (
    <button 
      id='toggle-color'
      onClick={(e) => setTextColor(textColor === "white" ? "black" : "white")}
    > Toggle Color</button>
  )
}

export default ToggleColor;