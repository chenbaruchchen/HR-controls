import React from 'react'

import PropTypes from 'prop-types'

import './button.css'

const Send = (props) => {
  return (
    <div onClick={props.onClick} className="send-container">
      <button className="send-button button">{props.text}</button>
    </div>
  )
}

Send.defaultProps = {
  button: 'Button',
}

Send.propTypes = {
  button: PropTypes.string,
}

export default Send
