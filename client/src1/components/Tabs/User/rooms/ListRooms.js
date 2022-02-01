import { useState,useEffect } from "react"

import axios from "axios";
import useToken from '../../../useToken'
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
      // console.log(res.data)
      // pepolesList=res.data
      setRooms(res.data)
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  
  getRoomsByUser()
     
        
       },[])
     
       let listElement
if (rooms!==null) {
    listElement=rooms.map(room=>(
      <>
      {console.log(props)}
        <a onClick={()=>{
          console.log(room._id)
          props.setChosen(room._id)
        }
         }> {room.name}</a>
        <br/>
</> 
    ))
}
else {
    listElement=<h3>לא מצאנו</h3>

}

 
  return(
    <div> רשימת חדרים
    {listElement}
    
     

      </div>
  );
}