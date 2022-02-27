import React, {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

import './list-rooms.css'
import axios from 'axios'
import { useAlert } from 'react-alert'
import { useHistory } from "react-router-dom"

function getRooms(setRooms, alert){

 
  const getToken = () => {
  
      const tokenString = localStorage.getItem('token');
      
      const userToken = JSON.parse(tokenString);
      return userToken?.token
    };

    axios.post('/api/user/rooms/getRooms',{}, { headers: {"Authorization" : `Bearer ${getToken()}`}})
    .then(function (response) {
       
       setRooms(response.data)
       

     })
    .catch(function (error) {
      alert.error('נכשל לצערנו')
    });


} 

const ListRooms = (props) => {
  const [rooms,setRooms]=useState(null)
  const alert = useAlert()
  const history = useHistory();

  useEffect(()=>{
    getRooms(setRooms,alert)
  },[])

  if (rooms){
    return (
      <div className="list-rooms-list-rooms">
        <h1 className="list-rooms-text">
          <span>חדרי ביקורת</span>
        </h1>
        {rooms.map( (key,index)=> (  <div onClick={()=>{
          
          history.push(`/rooms/${key._id}`)
          props.setChosen(key) 
          
        }} className="list-rooms-container">
          <svg viewBox="0 0 1024 1024" className="list-rooms-icon">
            <path d="M384 64h640v128h-640v-128zM384 448h640v128h-640v-128zM384 832h640v128h-640v-128zM0 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 896c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128z"></path>
          </svg>
          <span className="list-rooms-text2">{key.name}</span>
        </div>)

        )}
      
      </div>
    )
  }
  else{
return <h3>מחפש</h3>
  }
 
  
}

ListRooms.defaultProps = {
  text: 'ת"ש',
}

ListRooms.propTypes = {
  text: PropTypes.string,
}

export default ListRooms
