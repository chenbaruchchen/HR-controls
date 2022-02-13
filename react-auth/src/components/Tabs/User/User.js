import React, { useState } from 'react';

import Logout from './Logout';
 import { getEmailOfUser } from '../../scripts/setUser';
 import UserHeader from './user-header/user-header';
import  Rooms from './rooms/Rooms'
export default function Dashboard() {
 
  return(
  <div style={{margin:0,width:'97vw'}} className="App">
<UserHeader/>
       

 
 
 <Rooms/>

 

  </div>
   
  );
}