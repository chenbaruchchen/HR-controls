import React,{useState} from 'react'

import PropTypes from 'prop-types'

import './room.css'
import OnTop from '../../ui-element/on-top/on-top'
 import ListShelonim from './NewShelonim/list-shelonim/list-shelonim'
import  NewShelonim from './NewShelonim/NewShelonim'
import OldShelonim from './OldShelonim/OldShelonim'
const Room = (props) => {
     const [openNewShelon,setOpenNewShelon]=useState(false)
     if (openNewShelon)  return(<NewShelonim  setOpenNewShelon={setOpenNewShelon}/>)
       
     const saveRoom = room => {
     
      localStorage.setItem('room', JSON.stringify(room));
      return room;
    };
  let room= saveRoom(props.chosen)
  return (
    <div className="component1-container">
      <h1>
        <span>
          {`חדר ${room.name}`}
        </span>
      </h1>
      <svg onClick={()=>setOpenNewShelon(true)} viewBox="0 0 1024 1024" className="component1-add-room-icon">
        <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
      </svg>
      {/* <div className="component1-list-rooms">
        <h1 className="component1-text2">שאלונים שבוצעו</h1>
        <div className="component1-container1">
          <svg viewBox="0 0 1024 1024" className="component1-icon1">
            <path d="M384 64h640v128h-640v-128zM384 448h640v128h-640v-128zM384 832h640v128h-640v-128zM0 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 896c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128z"></path>
          </svg>
          <span className="component1-text3">{props.text}</span>
        </div>
      </div> */}
      <OldShelonim/>
    </div>
  )
}

Room.defaultProps = {
  text: 'ת"ש',
}

Room.propTypes = {
  text: PropTypes.string,
}

export default Room
