import { useState,useEffect } from "react"

import axios from "axios";
import useToken from '../../../useToken'
import './list-rooms.css'
export default function ListRooms(props) {


    const[rooms,setRooms]=useState(null)
    
    const[open,setOpen]=useState(false)

    let token=useToken().token
   
    useEffect(()=>{
  
   function getRoomsByUser(){
    axios.get('http://localhost:3300/api/secret/getRoomsByUser', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
       
      // pepolesList=res.data
      setRooms(res.data)
      
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  
  getRoomsByUser()
     
        
       },[])
     

    ////only for button when not show list
     function getList(){
    axios.get('http://localhost:3300/api/secret/getRoomsByUser', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
     
      setRooms(res.data)
     })
    .catch((error) => {
      console.error(error)
      alert(error)
    })
  
  
  }

       let listElement
if (rooms!==null) {
    listElement=rooms.map(room=>(
       


      <div
       onClick={()=>{
           
          props.setChosen(room._id)
        }
         } className="list-rooms-container">
        <span className="list-rooms-text1">{room.name}</span>
      </div>

 
    ))
}
else {
    listElement=<div>
    
    <h4>לא מצאנו</h4>
    <button onClick={()=>getList()}>נסה למצוא שוב</button>
    </div>

}

 
  return(
    // <div>
    

     <div className="list-rooms-list-rooms">
      <span className="list-rooms-text">החדרים שלי</span>
      {listElement}
    </div>

 
    
    
     

     
  );
}