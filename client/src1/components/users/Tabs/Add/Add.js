import React from "react";

import PropTypes from "prop-types";

import "./add-bikoret.css";

const AddBikoret = (props) => {
  return (
    <div className={`add-bikoret-container ${props.rootClassName} `}>
      <h2 className="add-bikoret-text">{props.heading}</h2>
      <input
        type="text"
        required="true"
        placeholder="שם הביקורת"
        className="add-bikoret-textinput input"
      />
      <span className="add-bikoret-text1">{props.text}</span>
      <div className="add-bikoret-list-users">
        <div className="add-bikoret-chosen-user">
          <svg viewBox="0 0 1024 1024" className="add-bikoret-add">
            <path d="M640 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM256 426h128v86h-128v128h-86v-128h-128v-86h128v-128h86v128zM640 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <span className="add-bikoret-text2">Text</span>
          <svg viewBox="0 0 1024 1024" className="add-bikoret-remove">
            <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
            <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-320v-64h320v64z"></path>
          </svg>
        </div>
        <div className="add-bikoret-none-chosen">
          <svg viewBox="0 0 1024 1024" className="add-bikoret-add1">
            <path d="M640 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM256 426h128v86h-128v128h-86v-128h-128v-86h128v-128h86v128zM640 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <span className="add-bikoret-text3">Text</span>
          <svg viewBox="0 0 1024 1024" className="add-bikoret-remove1">
            <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
            <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-320v-64h320v64z"></path>
          </svg>
        </div>
      </div>
      <button className="add-bikoret-button button">{props.button}</button>
    </div>
  );
};

AddBikoret.defaultProps = {
  text: "Text",
  textinput_placeholder: "placeholder",
  button: "Button",
  rootClassName: "",
  heading: "Heading"
};

AddBikoret.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string
};

export default AddBikoret;
