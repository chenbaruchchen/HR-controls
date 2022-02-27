import { useState } from "react"
import List from "./ListShelonim/ListShelonim"
 export default function App(props) {
    const [chosen,setChosen]=useState(null)
   if (chosen) return <Chosen/>
   return <List/>
}
 


function Chosen(props) {
    return (
        <div className="component1-list-rooms">
        <h1 className="component1-text2">שאלונים שבוצעו</h1>
        <div className="component1-container1">
          <svg viewBox="0 0 1024 1024" className="component1-icon1">
            <path d="M384 64h640v128h-640v-128zM384 448h640v128h-640v-128zM384 832h640v128h-640v-128zM0 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 896c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128z"></path>
          </svg>
          <span className="component1-text3">{props.text}</span>
        </div>
      </div>
    )
}