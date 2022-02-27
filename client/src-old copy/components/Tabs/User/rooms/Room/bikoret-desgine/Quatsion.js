import { useEffect, useState } from "react"

 
import OnTop from '../../../../../ui-element/on-top/on-top'
import QOnTop from "./q-on-top/q-on-top"
export default function Quatsion(props){


    const [open,setOpen]=useState(false)
    const [check,setCheck]=useState(false)
    const [ans,setAns]=useState('')
    const [details,setDetails]=useState(props.ans[props.quatsion?.index]?.details)

    
    const [found,setFound]=useState(props.ans[props.quatsion?.index]?.found)

    // useEffect(()=>{
    //   props.setAns([])
    // },[])

    function getPartOfText(text) {
     let shortText= text.slice(0,50)
      return shortText
    }


    function changeInput(tag,input) {
      
        if (tag==='details') {
            console.log('details')
            props.setAns((prev)=>{
                setDetails(input)
              prev[props.quatsion.index]={details:input,found:found}
                
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
      //   return(  <div className={!check?"q-list1-open-q-open":'q-list1-open-q-open-clicked'}>
      //   <span className="q-list1-open-q-text04">{props.quatsion.quatsion}</span>
      //   <input onChange={(e)=>changeInput('details',e.target.value)} placeholder='פירוט' className="q-list1-open-q-input" />
       
      //   <input onChange={(e)=>changeInput('found',e.target.value)}  placeholder='ממצאים' className="q-list1-open-q-input1"/>
          
      //   <div onClick={()=>setCheck((prev)=> {return !prev} )}    className={!check?"q-list1-open-check-q":'q-list1-open-check-q1'}>
      //     <svg viewBox="0 0 1024 1024" className= "q-list1-open-icon">
      //       <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
      //     </svg>
      //   </div>
      // </div>)
      return <OnTop  element={<QOnTop q={props.quatsion.quatsion} setOpen={setOpen} found={props.ans[props.quatsion.index]?.found} details={props.ans[props.quatsion.index]?.details} changeInput={changeInput}   />} />

    } 
    else {
        return (<div onClick={()=>setOpen(true)} className="q-list1-open-q1">
        <span className="q-list1-open-q-text11">{getPartOfText(props.quatsion.quatsion) }</span>
      </div>) 
    }
    
     
    }
