import React from "react";

import PropTypes from "prop-types";
import { useAlert } from 'react-alert'
 
import axios from 'axios'

import "./send.css";

const Send = (props) => {
  const alert = useAlert()
 
  function send() {

    const getRoom = () => {
      
      const roomString = localStorage.getItem('room');
      
      const room = JSON.parse(roomString);
      return room?._id
    };

    let data={
      meta:{
        type:'tash', subType:props.shelon.name
      }
      ,file:props.ans
      
      ,roomId:getRoom()
      
    }
     
    function addFile(){

 
      const getToken = () => {
      
          const tokenString = localStorage.getItem('token');
          
          const userToken = JSON.parse(tokenString);
          return userToken?.token
        };
    
        axios.post('/api/user/rooms/addFile',data, { headers: {"Authorization" : `Bearer ${getToken()}`}})
        .then(function (response) {
           
          alert.success('נוסף בהצלחה')
            
    
         })
        .catch(function (error) {
          alert.error('נכשל לצערנו')
        });
    
    
    } 
    
    addFile()
    }
  return (
    <div onClick={()=>send()} className="send-container">
      <button className="send-button button">{props.button}</button>
    </div>
  );
};

Send.defaultProps = {
  button: "Button"
};

Send.propTypes = {
  button: PropTypes.string
};

export default Send;
