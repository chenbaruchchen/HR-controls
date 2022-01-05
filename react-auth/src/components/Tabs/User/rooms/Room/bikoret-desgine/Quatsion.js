import { useEffect, useState } from "react"

 
export default function Quatsion(props){


    const [open,setOpen]=useState(false)
    const [check,setCheck]=useState(false)
    const [ans,setAns]=useState('')
    const [details,setDetails]=useState('')

    
    const [found,setFound]=useState('')

    function changeInput(tag,input) {
     
        if (tag==='details') {
            console.log('details')
            props.setAns((prev)=>{
              
               setDetails(input)
              prev[props.quatsion.index]={details:input,found:found}
                console.log(prev)
                return prev
             })

        } else {
            console.log('found')
            props.setAns((prev)=>{
              setFound(input)
                prev[props.quatsion.index]={details:details,found:input}
                 return prev
             })
        }
    }

    if (open) {
        return(  <div className={!check?"q-list1-open-q-open":'q-list1-open-q-open-clicked'}>
        <span className="q-list1-open-q-text04">{props.quatsion.quatsion}</span>
        <input onChange={(e)=>changeInput('details',e.target.value)} placeholder='פירוט' className="q-list1-open-q-input" />
       
        <input onChange={(e)=>changeInput('found',e.target.value)}  placeholder='ממצאים' className="q-list1-open-q-input1"/>
          
        <div onClick={()=>setCheck((prev)=> {return !prev} )}    className={!check?"q-list1-open-check-q":'q-list1-open-check-q1'}>
          <svg viewBox="0 0 1024 1024" className= "q-list1-open-icon">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
      </div>)
    } 
    else {
        return (<div onClick={()=>setOpen(true)} className="q-list1-open-q1">
        <span className="q-list1-open-q-text11">{props.quatsion.quatsion}</span>
      </div>) 
    }
    
     
    }
