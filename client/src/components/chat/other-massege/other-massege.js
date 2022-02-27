import React from 'react'

import PropTypes from 'prop-types'

import './other-massege.css'

const OtherMsg = (props) => {
  return (
    <div className="other-msg-other-msg">
      <div className="other-msg-content-box">
        <span className="other-msg-text">{props.massege?.message}</span>
      </div>
      <span className="other-msg-text1">{props.massege?.user.username}</span>
    </div>
  )
}

OtherMsg.defaultProps = {
  Text: 'Text',
  Text1: 'Text',
}

OtherMsg.propTypes = {
  Text: PropTypes.string,
  Text1: PropTypes.string,
}

export default OtherMsg
