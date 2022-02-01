import React, {useEffect, useState} from 'react'

import './bikoret.css'
import shelons from '../../../../../../files/shelonim'

 import List from './List'
 import Send from './Send'
const Bikoret = (props) => {
    const [shelon,setShelon]=useState(shelons[0])
 
const [ans,setAns]=useState([])
  return (
    <div className="q-list1-open-container">
      <div className="q-list1-open-shelon">

      <ChoseShelon shelon={shelon} setShelon={setShelon} shelons={shelons}/>

       <Head shelon={shelon} headLine={shelon.name}/>

       <List ans={ans} setAns={setAns} shelon={shelon}/>
      <Send meta={shelon} roomId={props.roomId}  ans={ans}/>
      </div>
    </div>
  )
}

 


function Head(props){
    return (  
        <div className="q-list1-open-head">
        <h1>{props.headLine}</h1>
      </div>
        )
    }

    function ChoseShelon(props){

        function chackIfChosen(shelon) {
            if (props.shelon===shelon) {
                return 'q-list1-open-shelon-type-chosen'
            } else {
               return 'q-list1-open-shelon-type'
           
            }
        }

        let list=props.shelons.map(shelon=>(
            <div onClick={()=>props.setShelon(shelon)} className={chackIfChosen(shelon)}>
            <span className="q-list1-open-q-text">{shelon.name}</span>
          </div>
        ))
        return (  
            
            <div className="q-list1-open-chose-shelon">
            <div className="q-list1-open-list-shelon">

            {list}
            </div>
          </div>
            )
        }

    
 

export default Bikoret
