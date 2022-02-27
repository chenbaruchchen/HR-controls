import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar1 = (props) => {
const [open,setOpen]=useState(false)
if (open) {
    return (
        // <div className="sidebar1-sidebar">
        //   <nav className="sidebar1-nav">
        //   <Link onClick={()=>setOpen(false)} style={{textDecoration:'none'}} to="/">  <span className="sidebar1-text">hone</span></Link>
        //   <Link onClick={()=>setOpen(false)} style={{textDecoration:'none'}}  to="/addRoom">  <span className="sidebar1-text1">יצירת חדר</span></Link> 
        //   <Link onClick={()=>setOpen(false)} style={{textDecoration:'none'}}  to="/rooms">  <span className="sidebar1-text1">חדרים</span></Link> 
        //   </nav>
        //   <div className="sidebar1-profile">
        //     <svg viewBox="0 0 1024 1024" className="sidebar1-icon">
        //       <path d="M660 874l-148-148 60-60 88 88 218-220 60 60zM470 512q-70 0-121-50t-51-120 51-121 121-51 120 51 50 121-50 120-120 50zM384 726l128 128h-384v-86q0-76 117-123t225-47q30 0 42 2z"></path>
        //     </svg>
        //     <div className="sidebar1-container">
        //       <span className="sidebar1-text2">
        //         <span>HR-controls</span>
        //       </span>
        //     </div>
        //   </div>
    
        //   <svg onClick={()=>setOpen(false)}  viewBox="0 0 1024 1024" className="sidebar1-icon2">
        //     <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        //   </svg>
        // </div>




        <div className="sidebar1-sidebar">
        <nav className="sidebar1-nav">


        <Link  onClick={()=>setOpen(false)} style={{ textDecoration: 'none', color: 'black'}} to="/">  


         <div  className="sidebar1-container">
            <span className="sidebar1-text">בית</span>
            <svg viewBox="0 0 1024 1024" className="sidebar1-icon">
              <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
            </svg>
          </div>
          </Link>


          <Link onClick={()=>setOpen(false)} style={{ textDecoration: 'none', color: 'black'}}  to="/addRoom">  
             <div  className="sidebar1-container1">
            <span className="sidebar1-text1">הוסף חדר</span>
            <svg viewBox="0 0 1024 1024" className="sidebar1-icon02">
              <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
            </svg>
          </div>
          </Link>

          

           <Link onClick={()=>setOpen(false)} style={{ textDecoration: 'none', color: 'black'}}  to="/rooms">
                  <div className="sidebar1-container2">
            <span className="sidebar1-text2">חדרים</span>
            <svg viewBox="0 0 1024 1024" className="sidebar1-icon04">
              <path d="M534 342v180l148 90-30 52-182-110v-212h64zM896 432h-290l118-120q-88-88-211-89t-211 85q-36 36-62 97t-26 111 26 111 62 97 98 62 112 26 113-26 99-62q86-86 86-208h86q0 158-112 268-112 112-272 112t-272-112q-112-110-112-267t112-269q46-46 125-79t145-33 145 33 125 79l116-120v304z"></path>
            </svg>
          </div>
          </Link>
        </nav>
        <div className="sidebar1-profile">
          <svg viewBox="0 0 1024 1024" className="sidebar1-icon06">
            <path d="M660 874l-148-148 60-60 88 88 218-220 60 60zM470 512q-70 0-121-50t-51-120 51-121 121-51 120 51 50 121-50 120-120 50zM384 726l128 128h-384v-86q0-76 117-123t225-47q30 0 42 2z"></path>
          </svg>
          <div className="sidebar1-container3">
            <span className="sidebar1-text3">
              <span>HR-controls</span>
            </span>
          </div>
        </div>
     
     

        <svg onClick={()=>setOpen(false)} viewBox="0 0 1024 1024" className="sidebar1-icon08">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
      </div>
)
} else {
    return (
      <svg onClick={()=>setOpen(true)} viewBox="0 0 1024 1024" className="sidebar1-icon08">
      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
    </svg>
     
      )
} 
}

Sidebar1.defaultProps = {
  text1: 'Dashboard',
  text: 'Dashboard',
}

Sidebar1.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Sidebar1
