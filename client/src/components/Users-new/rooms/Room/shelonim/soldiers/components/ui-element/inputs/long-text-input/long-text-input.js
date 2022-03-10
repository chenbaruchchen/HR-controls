import React from "react";

import PropTypes from "prop-types";

import "./long-text-input.css";

const LongTextInput = (props) => {
  return (
    <div className="long-text-input-container">
      <textarea
        onChange={props.setValue}
        placeholder={props.placeholder?props.placeholder: props.textarea_placeholder}
        className="long-text-input-textarea textarea"
      ></textarea>
    </div>
  );
};

LongTextInput.defaultProps = {
  textarea_placeholder: "placeholder"
};

LongTextInput.propTypes = {
  textarea_placeholder: PropTypes.string
};

export default LongTextInput;
