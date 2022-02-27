import React from 'react'

import './on-top.css'


//// the component get element in props andsize from parent
const OnTop = (props) => {
  return <div className="on-top-container">
   
    {props.element}
    </div>
}

export default OnTop
