import {React,useState} from 'react';
 import './App.css'
 import axios from "axios";

  import useToken from './components/useToken';
import Login from './components/users/Login';

import Gust from './components/Gust'
import Tabs from './components/Tabs'
import UserTab from './components/Tabs/User/User'
import TabBar from './components/ui-element/tab-bar/tab-bar'
 
function App() {
const [tab,setTab]=useState(UserTab)
  const { token, setToken } = useToken();

 
  if(!token) {
    return <Gust setToken={setToken} />
  }

 



  // cheack expierdDate
  function refreshToken(){

    ////get user data
      
    const tokenString = localStorage.getItem('token');
   const user = JSON.parse(tokenString);
   
   ///sendthe user and try get new token

   function refreshApi() {
      axios.post('/api/users/refreshToken',user.user)
  .then(function (response) {
    // handle success
    
 /////put the token inlocal storage
    let localStorage = window.localStorage.getItem('token');
     localStorage = JSON.parse(localStorage);
    localStorage.token=response.data
  
    window.localStorage.setItem('token', JSON.stringify(localStorage));

console.log(window.localStorage.getItem('token'))


   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    alert('some kind of problem in refresh token')
    return
  })
  .then(function () {
    // always executed
  });
  }

refreshApi()

setTimeout(refreshToken, 3*600*1000)
     }

   const expired= window.localStorage.getItem('expired')
        
if (expired>=Date.now()) {
    setTimeout(refreshToken, expired-Date.now())
     
} else {
  refreshToken()
 
}
  setTimeout(refreshToken, expired-Date.now)
   

  return (
    <div className="App">
        {/* <Tabs setTab={setTab} />
     */}
      {tab}
     
     <br/>
 <TabBar setTab={setTab} />
    </div>
  );
}

export default App;