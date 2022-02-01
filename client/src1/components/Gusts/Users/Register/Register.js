import React from "react";

import PropTypes from "prop-types";

import "./register.css";

const Register = (props) => {
  return (
    <div className={`register-login ${props.rootClassName} `}>
      <h3 className="register-text">{props.heading}</h3>
      <div className="register-form">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="register-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="register-textinput1 input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder11}
          className="register-textinput2 input"
        />
        <button className="register-button button">
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
