import React from 'react'

const ChangeColor = ({setColor, setColorCode}) => {

   function getColorCode(colorName) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.fillStyle = colorName;
      return context.fillStyle;
    }

  return (
    <input
      type="text" 
      placeholder='Enter Color'
      id='color-input'
      autoFocus
      required
      onChange={(e) => {
        setColor(e.target.value);
        setColorCode(getColorCode(e.target.value));
      }}
    />
  )
}

export default ChangeColor