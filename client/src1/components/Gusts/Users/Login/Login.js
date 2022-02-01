import React,{useState} from "react";
import { UserContext } from "../../../../App";

import PropTypes from "prop-types";

import "./Login.css";
const axios = require('axios').default;

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
  })
  .then(function () {
    // always executed
  });

     
 
}



  function handleResponse(data) {
     
    let user={
      user:data.user
      ,token:data.token
    }
    props.setUser(user);
    
  }
  function handleClick() {
    let response = null;
    handleResponse(response);
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
