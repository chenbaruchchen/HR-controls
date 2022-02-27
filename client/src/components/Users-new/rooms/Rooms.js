import ListRooms from "./list-rooms/list-rooms";
import { useState } from "react";
import Room from './Room/Room'
export default function Rooms() {
    const[chosen,setChosen]=useState(null)
    return(
        <div>
{
    chosen?<Room setChosen={setChosen} chosen={chosen}/>:<ListRooms setChosen={setChosen}/>
}
 
         </div>
    ) 
}