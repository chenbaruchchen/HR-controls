import { useState } from "react";
import ListShelonim from "./list-shelonim/list-shelonim";
import Shelon from "./Shelon";
export default function App(props) {
    const [chosen,setChosen]=useState(null)
    if (chosen) return <Shelon setChosen={setChosen} shelon={chosen}/>

    return(
        <ListShelonim setChosen={setChosen} setOpenNewShelon={props.setOpenNewShelon}/>
    )
        
    
}

