import React from "react";

import PropTypes from "prop-types";

import "./text-input.css";

const TextInput = (props) => {
  return (
    <div className="text-input-container">
      <input
      
      value={props.value}
        onChange={props.setValue}
        type="text"
        placeholder={props.textinput_placeholder}
        className="text-input-textinput input"
      />
    </div>
  );
};

TextInput.defaultProps = {
  textinput_placeholder: "placeholder"
};

TextInput.propTypes = {
  textinput_placeholder: PropTypes.string
};

export default TextInput;
