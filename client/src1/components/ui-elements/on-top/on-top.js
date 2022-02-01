import React from "react";

import "./on-top.css";

const OnTop = (props) => {
  if (props.close) {
    return null;
  }
  return <div className="on-top-container">{props.component}</div>;
};

export default OnTop;
