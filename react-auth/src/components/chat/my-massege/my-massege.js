import React from "react";

import PropTypes from "prop-types";

import "./my-massege.css";

const MyMsg = (props) => {
  return (
    <div className="my-msg-my-msg">
      <div className="my-msg-content-box">
        <span>{props.massege?.message}</span>
      </div>
      <span className="my-msg-text1">{props.massege?.user.username}</span>
    </div>
  );
};

MyMsg.defaultProps = {
  Text1: "Text",
  Text: "Text",
};

MyMsg.propTypes = {
  Text1: PropTypes.string,
  Text: PropTypes.string,
};

export default MyMsg;
