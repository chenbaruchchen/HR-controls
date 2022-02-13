
import './chose-shelon.css'
import shelonim from '../../../../files/shelonim'
 import axios from "axios";
 import useToken from '../../../useToken'

import {useState} from 'react'
 export default function App(props) {

 
  let meta=''

////find shelon to render his Qutsion
function findShelon(){

   meta=props.chosen?props.chosen.meta.name:''
   
  let shelon=shelonim[0]
  shelonim.forEach(shelonIndex=>{
    
    if (shelonIndex.name===meta) {
      shelon=shelonIndex
    }
  })
  return shelon
}

let shelon=findShelon()


   let indexQ=-1

    return(
        <div className="chose-shelon-chosen">
         
        <div className="chose-shelon-header1">
          <h1 className="chose-shelon-heading1">{meta}</h1>
        </div>
 
        {props.chosen &&props.chosen.ans.map(q=>{
          indexQ++
          return  <Quatsion quatsion={shelon?shelon.list[indexQ]:null} fileId={props.chosen._id} indexQ={indexQ} q={q}/>
        }
           
            )}



       
       
      </div>)
} 


function Quatsion(props){
    
const [open,setOpen]=useState(false)
const [edit,setEdit]=useState(false)

const [editDetails,setEditDetails]=useState(props.q?props.q.details:'')
const [editFound,setEditFound]=useState(props.q?props.q.found:'')
 
let token=useToken().token

function updateQ() {
  setEdit(false)

let data={
  fileId:props.fileId ,indexQ:props.indexQ,editDetails,editFound
}
console.log(data)

  axios.post('/api/secret/updateQ',data,  {
    headers: {
        'Authorization': `token ${token}`,
      'content-Type': 'application/json',
      'help': 'help'
    }
  })
.then((res) => {
 alert('נוסף בהצלחה')
})
.catch((error) => {
console.error(error)
})

}

function getPartOfText(text) {
  let shortText= text.slice(0,50)
   return shortText
 }

if(edit){
return(
  <div  onClick={()=>setOpen( prev=>  !prev)}  className="chose-shelon-q-open" >
  <h1>{props.quatsion.quatsion}</h1>
  <input onChange={(e)=>setEditDetails(e.target.value)} value={props.q&&editDetails} className="chose-shelon-container2"/>
     
  <input onChange={(e)=>setEditFound(e.target.value)} value={props.q&&editFound} className="chose-shelon-container2"/>
     
   
 
  <svg onClick={updateQ} style={{width:'30px',height:'30px'}} viewBox="0 0 1024 1024" className="chose-shelon-icon">
              <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
            </svg>  

      
</div>
)
}
if (open) {
  return(
    <div  onClick={()=>setOpen( prev=>  !prev)}  className="chose-shelon-q-open" >
    <h1>{props.quatsion.quatsion}</h1>
    <div className="chose-shelon-container2">
      <span>{props.q&&props.q.details}</span>
    </div>
    <div className="chose-shelon-container3">
      <span>{props.q&&props.q.found}</span>
    </div>
    <svg onClick={()=>setEdit(true)} style={{width:'30px',height:'30px'}} viewBox="0 0 1024 1024" className="chose-shelon-icon">
              <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
            </svg>
           
  </div>
    )
} else {
  return(
  <div onClick={()=>setOpen( prev=>  !prev)} className="chose-shelon-q">
  <h1>{getPartOfText(props.quatsion.quatsion)}</h1>
</div>
  )
}
 
}
