import React from "react";

import PropTypes from "prop-types";

import "./list-rooms.css";

const ListRooms = (props) => {
  return (
    <div className="list-rooms-list-rooms">
      <span className="list-rooms-text">{props.text}</span>
      <div className="list-rooms-container">
        <span>{props.text1}</span>
      </div>
    </div>
  );
};

ListRooms.defaultProps = {
  text11: "Text",
  text1: "Text",
  text: "החדרים שלי"
};

ListRooms.propTypes = {
  text11: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string
};

export default ListRooms;
