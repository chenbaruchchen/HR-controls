import React,{useState} from 'react'

import PropTypes from 'prop-types'

import './send-massege.css'

const SendMassege = (props) => {
   
  return (
    <div className="send-massege-send-massege">
      <input
      value={props.message}
        onChange={e => props.setMessage(e.target.value)}
        type="text"
        placeholder='הודעה לחדר '
        className="send-massege-textinput input"
      />
      <svg onClick={()=>props.send()} viewBox="0 0 1024 1024" className="send-massege-icon">
        <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
      </svg>
    </div>
  )
}

SendMassege.defaultProps = {
  textinput_placeholder: 'placeholder',
}

SendMassege.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default SendMassege
