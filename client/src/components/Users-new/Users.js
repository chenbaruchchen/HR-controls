import MyRouter from './router/router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


 
import Messanger from './Messanger/Messanger'


export default function Users() {
    
    return (  <Router>
      <Messanger/>
        <MyRouter/>
        
             </Router>)
 
   
 
}