import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import TextInput from "../../ui-element/inputs/text-input/text-input";

import LongTextInput from "../../ui-element/inputs/long-text-input/long-text-input";

import DateInput from "../../ui-element/inputs/date-input/date-input";

import "./subject.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import Quatsion from "./quatsion/quatsion";
const Subject = (props) => {
  function getValByIndex(index) {
    let subjectIndex = props.chosenSubjectIndex;

    ///if subject not defaind yet return empty string
    if (props.ans[subjectIndex] === undefined) {
      let ans = [...props.ans];
      ans[subjectIndex] = [];
      props.setAns(ans);
      return "";
    }

    ///if quatsion in subject not defaind yet return empty string

    if (props.ans[subjectIndex][index] === undefined) {
      let ans = [...props.ans];

      ans[subjectIndex][index] = {
        value: "",

        ///first subject then index - q
        place: [subjectIndex, index]
      };
      props.setAns(ans);
      return "";
    }

    return props.ans[subjectIndex][index]?.value;
  }

  function setValByIndex(value, index) {
    let subjectIndex = props.chosenSubjectIndex;

    ///if subject not defaind yet set new
    if (props.ans[subjectIndex] === undefined) {
      let ans = [...props.ans];
      ans[subjectIndex] = [];
      ans[subjectIndex][index] = {
        value: value,

        ///first subject then index - q
        place: [subjectIndex, index]
      };
      props.setAns(ans);

      return;
    }

    ///if quatsion in subject not defaind set

    if (props.ans[subjectIndex][index] === undefined) {
      let ans = [...props.ans];
      ans[subjectIndex][index] = {
        value: value,

        ///first subject then index - q
        place: [subjectIndex, index]
      };
      props.setAns(ans);
      return;
    }

    ///evry other case
    props.ans[subjectIndex][index] = {
      value: value,

      ///first subject then index - q
      place: [subjectIndex, index]
    };
    return;
  }

  return (
    <div className="subject-list-subject">
      <h2 className="subject-text">{props.chosenSubject.name}</h2>
      {props.chosenSubject.list.map((key, index) => {
        let value = getValByIndex(index);
        return (
          <Quatsion
            subjectIndex={props.chosenSubjectIndex}
            value={value}
            ans={props.ans}
            setValByIndex={setValByIndex}
            getValByIndex={getValByIndex}
            quatsion={key}
            index={index}
          />
        );
      })}
    </div>
  );
};

function Quatsion(props) {
  const [value, setValue] = useState(props.getValByIndex(props.index));

  ///update q to its paremater

  let input;

  if (props.quatsion.type === "string") {
    input = (
      <TextInput
      value={value}
        setValue={(e) => {
          props.setValByIndex(e.target.value, props.index);
          setValue(e.target.value);
        }}
      />
    );
  } else if (props.quatsion.type === "date") {
    input = (
      
      <DatePicker
      value={value}

        selected={props.getValByIndex(props.index)}
        onChange={(date) => {
          props.setValByIndex(date, props.index);
          setValue(date);
        }}
      />
    );
  } else if (props.quatsion.type === "long-text") {
    input = (
      <LongTextInput
        setValue={(e) => {
          props.setValByIndex(e.target.value, props.index);
          setValue(e.target.value);
        }}
      />
    );
  }

  // let value = props.getValByIndex(props.index).value?.toString();

  return (
    <div className="subject-container">
      <span className="subject-text1">{props.quatsion.name}</span>
      <div className="subject-container1">{input}</div>
      <span className="subject-text2">{value?.toString()}</span>
      <svg viewBox="0 0 634.88 1024" className="subject-icon">
        <path d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"></path>
      </svg>
    </div>
  );
}

Subject.defaultProps = {
  text: "שאלה",
  text1: "Text",
  heading: "Heading"
};

Subject.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string
};

export default Subject;
