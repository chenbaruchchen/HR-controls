import { useEffect } from 'react'
import Quatsion from './Quatsion'

export default function List(props){
    useEffect(()=>{
         ///evry time shelon change set ans to empty
        props.setAns([])
        
    },[props.shelon])
  

    let list=props.shelon.list.map(q=>(
        <Quatsion ans={props.ans} setAns={props.setAns} key={q.index} quatsion={q}/>
    ))
    return (  
       
        <div className="q-list1-open-q-list">
            {list}
          
        </div>)
    }