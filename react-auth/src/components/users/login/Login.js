import "./login.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Singin from "../signin/Signin";
import { setUserInLocal } from "../../scripts/setUser";

function setExpiredInLocalStorage() {
  const now = Date.now();

  ////expired in 3*60*1000
  const expired = now + 3 * 600 * 1000;

  ///set in local

  window.localStorage.setItem("expired", expired);

  // setTimeout(refreshToken, 3*600*1000)
}

async function loginUser(credentials) {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [openRegister, setOpenRegister] = useState(false);
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      email,
      password,
    });

    if (token) {
      setToken(token);
      setExpiredInLocalStorage();
    } else {
      alert("problem with token");
    }
  };

  if (openRegister) {
    return <Singin setOpenRegister={setOpenRegister} />;
  }

  return (
    <div className={`login-login `}>
      <h3 className="login-text">התחברות</h3>
      <div className="login-form">
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="abcs@mail.com"
          className="login-textinput input"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
          className="login-textinput1 input"
        />
        <button onClick={handleSubmit} className="login-button button">
          התחבר
        </button>
        <span onClick={() => setOpenRegister(true)} className="login-text1">
          לעמוד ההרשמה
        </span>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

Login.defaultProps = {
  heading: "התחברות",
  text: "להרשמה",
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder",
  button: "שלח",
  rootClassName: "",
};

Login.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
};
