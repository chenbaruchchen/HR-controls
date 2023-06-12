import "./singin.css";

import React, { useState } from "react";
import PropTypes from "prop-types";

async function registerUser(credentials) {
  return fetch("api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then(alert("נוסף בהצלחה"));
}

export default function Singin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [username, setUserName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await registerUser({
      email,
      password,
      username,
    })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  return (
    <div className={`register-login ${props.rootClassName} `}>
      <h3 className="register-text">{props.heading}</h3>
      <div className="register-form">
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user-name"
          className="register-textinput input"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abcd@gmail.com"
          className="register-textinput1 input"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
          className="register-textinput2 input"
        />
        <button onClick={handleSubmit} className="register-button button">
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
}

Singin.defaultProps = {
  rootClassName: "",
  textinput_placeholder11: "placeholder",
  text: "להתחברות",
  heading: "הרשמה",
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder",
};

Singin.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
};
