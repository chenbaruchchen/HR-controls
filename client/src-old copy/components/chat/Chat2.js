import React, { useEffect, useState } from 'react';
import './chat.css'
import { initiateSocket, disconnectSocket,
subscribeToChat, sendMessage } from './Socket';

import useToken from '../useToken'
 
import axios from "axios";

import {getEmail} from '../scripts/setUser'
 
function getUserFromLocal() {
  let userAndToken =localStorage.getItem('token');
    
  const user = JSON.parse(userAndToken).user;
 
  return user
}
////get older messages
async function getLastTenMessages(setChat,roomId,token){
 
 await axios.post('/api/secret/getLastTenMessages', {
    roomId
  }, {
    headers: {
      'Authorization': `Basic ${token}` 
    }
  }) .then((res) => {
    // console.log(res)
    // console.log(res.data[0].messages)
   setChat(res.data[0].messages)
  })

  .catch((error) => {
    console.error(error)
  })

 

}
const ChatFigma = (props) => {
 
    const [room, setRoom] = useState(props.roomId);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]); 
    const [user, setUser] = useState(getUserFromLocal()); 

    let token=useToken().token

    useEffect(() => {

        getLastTenMessages(setChat,room,token)

        if (room) initiateSocket(room); 
        subscribeToChat((err, data) => {
        if(err) return; 
        setChat(oldChats =>[data, ...oldChats])
        }); 
        return () => {
        disconnectSocket();
        }
        }, [room]);
        console.log(chat)
   function chackIfMe(massege) {
    if (massege.user===user){
        return true
    }
    else {return false}
    
                     }  

                     
  return (
    <div className="chat-container">
         <div className="chat-header">
          <h1 className="chat-figma-text">
            <span>chat : {props.roomId}</span>
            <br></br>
            <span></span>
          </h1>
        </div>
        chat-list
        
        <div  className="chat-list">

        { chat.map((m,i) => (

 <div  key={i} className={chackIfMe(m) ? "chat-my-box" : "chat-other-box"}>
   
 <div  className={chackIfMe(m)? "chat-my-msg": "chat-other-msg" }>
   <span className="chat-figma-text04">{m.message}</span>
 </div>  
 <span className="chat-figma-text05">{m.user?.username}</span>
</div>



 ) )}
        </div>

        


        <div className="chat-send">
        <input
        value={message}
        onChange={e => setMessage(e.target.value)} className="chat-container1"/>
        <svg   onClick={()=> sendMessage(room,message,user)} viewBox="0 0 1024 1024" className="chat-icon">
          <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
        </svg>
      </div>

      
      </div>
   )
}

export default ChatFigma
