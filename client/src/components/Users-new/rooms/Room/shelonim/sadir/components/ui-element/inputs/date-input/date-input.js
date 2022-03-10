import React from "react";

import PropTypes from "prop-types";

import "./date-input.css";

const DateInput = (props) => {
  return (
    <div className="date-input-container">
      <input
        type="date"
        placeholder={props.textinput_placeholder}
        name="date"
        className="date-input-textinput input"
      />
    </div>
  );
};

DateInput.defaultProps = {
  textinput_placeholder: "placeholder"
};

DateInput.propTypes = {
  textinput_placeholder: PropTypes.string
};

export default DateInput;
