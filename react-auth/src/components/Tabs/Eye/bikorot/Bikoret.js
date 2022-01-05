
import axios from "axios";
 
import useToken from '../../../useToken'

import Shelon from './Shelon'
import Files from './Files'
import { useEffect,useState } from 'react'


export default function App(props) {
   const [files,setFiles]=useState(null)
   const [chosen,setChosen]=useState(null)

  let token=useToken().token
 useEffect(()=>{

  function getFiles(){
let data={roomId:props.room._id,help:'help'}
console.log(data)
axios.get('/api/secret/getFilesByRoomId',
{
  params: {
    roomId: props.room._id
  }
}).then((res) => {
     
     console.log(res)
      setFiles(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  getFiles()
 },[])

    return(
        <>
          <Files setChosen={setChosen} files={files}/>
         <Shelon chosen={chosen}/>
      
        </>
        
    )
}