import {useState} from 'react'
import axios from "axios";

import {sadirList} from '../../../../../files/QlistSadir'
import useToken from '../../../../useToken'

 export default function Sadir(props) {

const [openRate,setOpenRate]=useState(false)

let files
if (openRate) {
    files=<Rate />
} else {
     files=<Qlist /> 
}
return(<div>
<Tabs setOpenRate={setOpenRate}/>
{openRate?<Rate />:<Qlist roomId={props.roomId}  list={sadirList} />}
</div>)


}

function Tabs(props) {

return(
<div>
<div onClick={()=>props.setOpenRate(true)}>ציונים</div>
<div onClick={()=>props.setOpenRate(false)}>שאלות</div>


</div>)

}

function Rate(props) {
    return(
        <div>Rate</div>
    )
}



function Qlist(props) {
    let token=useToken().token

function addFile(data){
     axios.post('http://localhost:3300/api/secret/addFileToRoom', {
      headers: {
        'Authorization': `token ${token}`
      },data
    })
    .then((res) => {
      
    })
    .catch((error) => {
      console.error(error)
    })
  
  
  }
  
  addFile()
     



    const [ans,setAns]=useState([])
    let meta={'mata':'mata'}
     
  
 let list=   props.list.map((q)=>(
        <Q setAns={setAns} ans={ans} q={q}/>
    ))
    return(
        <div>
        <a onClick={()=>{
            addFile({ans,meta,roomId:props.roomId})  }}>send</a>
        {list}
        </div>
    )
}

function Q(props) {
    return(
            <div>
            <h5>{props.q.quatsion}</h5>
            <input onChange={(e)=>{
                let helper=[...props.ans]
                helper[props.q.index]=e.target.value
           props.setAns(helper)
            }}/>
            </div>
    
    )
}
