import React from 'react'

const Button = ({buttonText, reqState, setReqState}) => {
  return (
    <button
      onClick={(e ) => {setReqState(buttonText)}}
    >{buttonText}</button>
  )
}

export default Button