import React from 'react'

import './chose-shelon.css'
import ListBikorot from './ListBikorot'
import Bikoret from './Bikoret'
import { useEffect,useState } from 'react'



import axios from "axios";
 
import useToken from '../../../useToken'

const ChoseShelon = () => {

  const [chosenBikoret,setChosenBikoret]=useState(null)
  
  const [rooms,setRooms]=useState(null)

  let token=useToken().token
 useEffect(()=>{

  function getShelonim(){
    axios.get('http://localhost:3300/api/secret/getRooms', {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then((res) => {
    
     
      setRooms(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  getShelonim()
 },[])

 let display=<h4>מחכים למידע שיטען</h4>
 if (chosenBikoret!==null) {
  display=<Bikoret room={chosenBikoret}/>
 } else  {
   if (rooms!==null) {
    display=<ListBikorot rooms={rooms} setChosenBikoret={setChosenBikoret}/>
   }
 }
  return (
    <div className="chose-shelon-container">
      <div className="chose-shelon-container1">
       
<Header/>

 {display}
      
      
      
      </div>
    </div>
  )
}

function Header(params) {
  return ( <div className="chose-shelon-header">
  <h1>ביקורות עבר</h1>
</div>)
}

export default ChoseShelon
