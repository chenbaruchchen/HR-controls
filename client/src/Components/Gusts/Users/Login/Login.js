import React,{useState} from "react";
import { UserContext } from "../../../../App";

import PropTypes from "prop-types";

import "./Login.css";
const axios = require('axios').default;





function refreshToken(user){

   
    axios.post('/api/users/refreshToken',user)
  .then(function (response) {
    // handle success
    
    window.localStorage.setItem('token',  response.data);


    const tokenString = window.localStorage.getItem('token');
    // const userToken = JSON.parse(tokenString);
    
    console.log(tokenString);
   
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

     
 



/////add call and set token
     
  
 
  setTimeout(refreshToken, 3*600*1000)
 
}
function localStorage(data){

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };


   const saveToken = userToken => {
     window.localStorage.setItem('token',  userToken);
     
  };


 

   const saveUser = user => {
     console.log( JSON.stringify(user))
     console.log(  user)
    window.localStorage.setItem('user', JSON.stringify(user));
     
  };
 
  let user =data.user
    user.expired=data.expired
    console.log(data)
    saveToken(data.token)
    saveUser(user)
  

}


const Login = (props) => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  async function loginUser() {


    axios.post('/api/users/login',{email,password})
  .then(function (response) {
    // handle success
    console.log(response);
    handleResponse(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    alert('some kind of problem')
    return
  })
  .then(function () {
    // always executed
  });

     
 
}



  function handleResponse(data) {
     
    
  refreshToken(data.user)  
  localStorage(data)
 
    var now = new Date();
now.setTime(now.getTime() + 1 * 3600 * 1000);
    let user={
      user:data.user
      ,token:data.token, expired:now

    }
    props.setUser(user);
    
  }
 
  return (
    <div className={`login-login ${props.rootClassName} `}>
      <h3 className="login-text">{props.heading}</h3>
      <div className="login-form">
        <input
        value ={email}
        onChange={(e)=>setEmail(e.target.value)}
          type="text"
          placeholder={props.textinput_placeholder}
          className="login-textinput input"
        />
        <input
        value ={password}
        onChange={(e)=>setPassword(e.target.value)}
          type="text"
          placeholder={props.textinput_placeholder1}
          className="login-textinput1 input"
        />
        <button onClick={loginUser} className="login-button button">
          {props.button}
        </button>
        <span
          onClick={() => props.setOpenRegister(true)}
          className="login-text1"
        >
          {props.text}
        </span>
      </div>
    </div>
  );
};

Login.defaultProps = {
  heading: "התחברות",
  text: "להרשמה",
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder",
  button: "שלח",
  rootClassName: ""
};

Login.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string
};

export default Login;
