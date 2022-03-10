import React from 'react'

import './home.css'
import LogOut from './log-out'
const Home = (props) => {
  return (
    <div style={{width:'90vw'}} className="home-container">
      <div className="home-header">
        <div className="home-top"></div>
        <div className="home-avatar-profile">
          <svg viewBox="0 0 1024 1024" className="home-icon-user">
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
        </div>
        <span className="home-text">Text</span>
        <div className="home-buttom"></div>
      </div>
      <div className="home-container1">
        <div onClick={()=>LogOut()} className="home-log-out">
          <span  className="home-text1">התנתק</span>
          <svg viewBox="0 0 1024 1024" className="home-icon1">
            <path d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home