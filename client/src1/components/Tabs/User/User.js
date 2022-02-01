import React, { useState } from 'react';

import Logout from './Logout';
 import { getEmailOfUser } from '../../scripts/setUser';
 
import  Rooms from './rooms/Rooms'
export default function Dashboard() {
 
  return(
  <div>

      <Logout/>

      <h2>user</h2>


{/* chose room and display room*/}
 
 <Rooms/>

 

  </div>
   
  );
}