import { useState } from "react"
import List from "./ListShelonim/ListShelonim"
import Chosen from "./Chosen/Chosen"
 export default function App(props) {
    const [chosen,setChosen]=useState(null)
   if (chosen) return <Chosen/>
   return <List setChosen={setChosen}/>
}
 


