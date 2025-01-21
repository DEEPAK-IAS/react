import React from 'react';


const ColorBox = ({color, colorCode, textColor}) => {
  return (
    <div className='color-card' style = {{backgroundColor: color}}>
      <p className='color-name' style = {{color: textColor}}>{color}</p>
      <p className='color-code' style = {{color: textColor}}>{colorCode}</p>
    </div>
  )
}

export default ColorBox;