import React from 'react'

import PropTypes from 'prop-types'

import './user-header.css'

const UserHeader = (props) => {
  return (
    <div className="user-header-container">
      <div  
       onClick={()=>{
        localStorage.clear();
        window.location.reload();

         
    }} className="user-header-container1">
        <svg viewBox="0 0 1024 1024" className="user-header-icon">
          <path d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"></path>
        </svg>
        <span className="user-header-text">{props.text11}</span>
      </div>
      <span
     
       className="user-header-text1">{props.text}</span>
    </div>
  )
}

UserHeader.defaultProps = {
  text: 'שלום חן',
  text11: 'התנתק',
}

UserHeader.propTypes = {
  text: PropTypes.string,
  text11: PropTypes.string,
}

export default UserHeader
