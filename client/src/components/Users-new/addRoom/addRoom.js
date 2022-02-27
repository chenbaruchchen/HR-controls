import React, { useState } from 'react'

import PropTypes from 'prop-types'

import TextInput from '../ui-element/inputs/text-input/text-input'
import Send from '../ui-element/buttons/pink/button'
import './add-room.css'

import OnTop from '../../ui-element/on-top/on-top'

import axios from 'axios'

import { useHistory } from "react-router-dom"

import { useAlert } from 'react-alert'

function handleSend(name,history,alertResponse){
    

    console.log(name)
    const getToken = () => {
    
        const tokenString = localStorage.getItem('token');
        
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };

      axios.post('/api/user/rooms/addRoom',  {name}, { headers: {"Authorization" : `Bearer ${getToken()}`}})
      .then(function (response) {
        alertResponse(true)

        history.push("/");

       })
      .catch(function (error) {
        alertResponse(false)
      });

 
}

const AddRoom = (props) => {
    const [value,setValue]=useState('')
    const history = useHistory();
    const alert = useAlert()

    function alertResponse(bool) {
       bool? alert.success('נוסף בהצלחה'):alert.error('נכשל לצערנו')

    }
  return (
    <div className="add-room-new-add-room">
    <h2 className="add-room-new-text">{props.heading}</h2>
    <div className="add-room-new-container">
       
      <span className="add-room-new-text1">{props.text}</span>

      <TextInput setValue={(e)=>setValue(e.target.value)} placeholder='שם החדר'/>
    </div>
    {value}
    <Send onClick={()=>handleSend(value,history,alertResponse)} text='הוסף חדר'></Send>
  </div>
  )
}

AddRoom.defaultProps = {
  heading: 'יצירת חדר',
  text: 'שם החדר',
}

AddRoom.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default AddRoom
