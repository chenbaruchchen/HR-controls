import "./App.css";
import React, { useState } from "react";
import Gusts from "./Components/Gusts/Gusts";
import Users from "./Components/Users/Users";
import {handleUser, getToken,getUser} from './hooks/handleUser'

///create one time user context
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
 
  let token=getToken()
   
  if (token==undefined){
    var now = new Date();
    if (user?.expired>=now){
      setUser(getUser())
    }
}
   
  if (user) {

    // handleUser(user)
    return (
      <UserContext.Provider value={[user, setUser]}>
        <Users />
      </UserContext.Provider>
    );
  }

  return <Gusts setUser={setUser} />;
}

export default App;
