import React from 'react';
import { useEffect,useState } from 'react';

import Room   from './Room/Room';

import ListRooms from './ListRooms'
export default function Chose() {
  const[chosen,setChosen]=useState(false)
  let chosenElement=<ListRooms setChosen={setChosen}/>
 if (chosen===false) {
  // setChosen(<ListRooms setChosen={setChosen}/>)
  chosenElement=<ListRooms setChosen={setChosen}/>

} else {
  // setChosen(<Room chosen={chosen}  setChosen={setChosen} />) 
  chosenElement=<Room chosen={chosen}  setChosen={setChosen} />
}
 
return (
  <> {chosenElement}
 </>
)
}











