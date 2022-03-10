import React from 'react'

import PropTypes from 'prop-types'

import './list-shelonim.css'
import Tash from '../../shelonim/tash/App'
import Sadir from '../../shelonim/sadir/App'
import Soldiers from '../../shelonim/soldiers/App'
const ListShelonim = (props) => {
  return (
    <div className="list-shelonim-container">
      <div className="list-shelonim-list-rooms">
        <h1>{props.heading}</h1>
        <svg onClick={()=>props.setOpenNewShelon(false)} viewBox="0 0 1024 1024" className="list-shelonim-icon">
          <path d="M512 386.517v-109.184c0-10.923-4.181-21.845-12.501-30.208-8.32-8.32-19.243-12.459-30.165-12.459s-21.845 4.139-30.165 12.459l-268.501 264.875 268.501 264.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501 12.501-19.285 12.501-30.165v-106.197c117.333 2.901 245.547 24.149 341.333 170.197v-42.667c0-197.675-149.333-360.235-341.333-381.483z"></path>
        </svg>



        <div onClick={()=>{
          props.setChosen(<Tash/>)
        }} className="list-shelonim-container1">
          <svg  viewBox="0 0 1024 1024" className="list-shelonim-icon2">
            <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
          </svg>
          <span className="list-shelonim-text1">ת"ש</span>
        </div>

        <div  onClick={()=>{
          props.setChosen(<Sadir/>)
        }}  className="list-shelonim-container1">
          <svg  viewBox="0 0 1024 1024" className="list-shelonim-icon2">
            <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
          </svg>
          <span className="list-shelonim-text1">סדיר </span>
        </div>
       
        <div  onClick={()=>{
          props.setChosen(<Soldiers/>)
        }}  className="list-shelonim-container1">
          <svg  viewBox="0 0 1024 1024" className="list-shelonim-icon2">
            <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
          </svg>
          <span className="list-shelonim-text1">שיחת חיילי חובה </span>
        </div>
      </div>
    </div>
  )
}

ListShelonim.defaultProps = {
  heading: 'שאלון חדש',
  text1: 'Text',
}

ListShelonim.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
}

export default ListShelonim
