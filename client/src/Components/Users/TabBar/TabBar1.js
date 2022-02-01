import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./tab-bar1.css";

const Tab = (props) => {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    props.setTab(open);
  });
  return (
    <div className={`tab-container ${props.rootClassName} `}>
      <svg
        onClick={() => setOpen(0)}
        viewBox="0 0 1024 1024"
        className={open === 0 ? "tab-icon-chosen" : "tab-icon3"}
      >
        <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
      </svg>
      <svg
        onClick={() => setOpen(1)}
        viewBox="0 0 1024 1024"
        className={open === 1 ? " tab-icon1 tab-icon-chosen" : "tab-icon1"}
      >
        <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
      </svg>
      <svg
        onClick={() => setOpen(2)}
        className={open === 2 ? "tab-icon-chosen" : "tab-icon3"}
        viewBox="0 0 1024 1024"
      >
        <path d="M950.857 548.571c-54.286-84-128.571-156-217.714-201.714 22.857 38.857 34.857 83.429 34.857 128.571 0 141.143-114.857 256-256 256s-256-114.857-256-256c0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 97.714 150.857 255.429 256 438.857 256s341.143-105.143 438.857-256zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.143 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM1024 548.571c0 14.286-4.571 27.429-11.429 39.429-105.143 173.143-297.714 289.714-500.571 289.714s-395.429-117.143-500.571-289.714c-6.857-12-11.429-25.143-11.429-39.429s4.571-27.429 11.429-39.429c105.143-172.571 297.714-289.714 500.571-289.714s395.429 117.143 500.571 289.714c6.857 12 11.429 25.143 11.429 39.429z"></path>
      </svg>
    </div>
  );
};

Tab.defaultProps = {
  rootClassName: ""
};

Tab.propTypes = {
  rootClassName: PropTypes.string
};

export default Tab;
