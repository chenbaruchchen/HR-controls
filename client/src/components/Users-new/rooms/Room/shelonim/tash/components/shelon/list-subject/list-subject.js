import React from "react";

import PropTypes from "prop-types";

import "./list-subject.css";

const ListSubject = (props) => {
  return (
    <div className="list-subject-list-subject">
      {props.shelon.subjects?.map((subject, index) => {
        return (
          <div
            onClick={() => {
              props.setChosenSubject(subject);
              props.setChosenSubjectIndex(index);
            }}
            className="list-subject-container"
          >
            <svg viewBox="0 0 1024 1024" className="list-subject-icon">
              <path d="M384 64h640v128h-640v-128zM384 448h640v128h-640v-128zM384 832h640v128h-640v-128zM0 128c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM0 896c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128z"></path>
            </svg>
            <span className="list-subject-text">{subject.name}</span>
          </div>
        );
      })}
    </div>
  );
};

ListSubject.defaultProps = {
  text1: "Text"
};

ListSubject.propTypes = {
  text1: PropTypes.string
};

export default ListSubject;
