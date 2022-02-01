import React,{useState} from "react";

import PropTypes from "prop-types";

import "./register.css";
const axios = require('axios').default;


const Register = (props) => {

  const[email,setEmail]=useState('')
  
  const[password,setPassword]=useState('')
  
  const[username,setUsername]=useState('')

 async function handleClick(){
          
    axios.post('/api/users/register',{email,password,username})
    .then(function (response) {
      // handle success
      console.log(response);
      alert('נוסף בהצלחה')

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
  return (
    <div className={`register-login ${props.rootClassName} `}>
      <h3 className="register-text">{props.heading}</h3>
      <div className="register-form">
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}

          type="text"
          placeholder='abcd@mail.com'
          className="register-textinput input"
        />
        <input
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
          type="text"
          placeholder='username'
          className="register-textinput1 input"
        />
        <input
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="text"
            placeholder='password'
                      className="register-textinput2 input"
        />
        <button onClick={handleClick} className="register-button button">
          <span className="register-text1">שלח</span>
        </button>
        <span
          onClick={() => props.setOpenRegister(false)}
          className="register-text2"
        >
          {props.text}
        </span>
      </div>
    </div>
  );
};

Register.defaultProps = {
  rootClassName: "",
  textinput_placeholder11: "placeholder",
  text: "להתחברות",
  heading: "הרשמה",
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder"
};

Register.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string
};

export default Register;
