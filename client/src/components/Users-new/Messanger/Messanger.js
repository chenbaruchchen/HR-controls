// import Drag from './drag/drag'
// import { useState } from 'react'

// export default function Messanger(props) {
// const [open,setOpen]=useState(false)

// if (open) {
//     return <button onClick={()=>setOpen(false)}>open</button>

// }

// return <Drag open={()=>setOpen(true)}/> 

// }




import React, {useCallback,useState,useEffect} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Drag from './drag/drag'
function Messanger() {

    const [open,setOpen]=useState(false)

  const handle = useFullScreenHandle();
 
    return(<><Drag open={()=>{handle.enter()
        setOpen(true)}}/> 
        
       <FullScreen handle={handle}>
        <div style={{background:'white',width:'100%',height:"100%"}}>
            
       {
           open&&<button onClick={()=>{
            handle.exit()
               setOpen(false)
               }}>
           Exit
         </button> 
       } 
       </div>
       
      </FullScreen>
      </>
      )
} 
 
   


    

export default Messanger;