import React, { useState } from "react";

import ListSubject from "./list-subject/list-subject";
import "./shelon.css";
import ChosenSubject from "./subject/subject";
import Send from "./send/send";
const Shelon = (props) => {
  const [chosenSubject, setChosenSubject] = useState(null);
  const [chosenSubjectIndex, setChosenSubjectIndex] = useState(null);

  const [ans, setAns] = useState([]);

  return (
    <div className="home-container">

      {/* back buuton there is 2 */}
      {/* <svg
        onClick={() => props.setShelon(null)}
        viewBox="0 0 1024 1024"
        className="home-icon"
      >
        <path d="M512 386.517v-109.184c0-10.923-4.181-21.845-12.501-30.208-8.32-8.32-19.243-12.459-30.165-12.459s-21.845 4.139-30.165 12.459l-268.501 264.875 268.501 264.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501 12.501-19.285 12.501-30.165v-106.197c117.333 2.901 245.547 24.149 341.333 170.197v-42.667c0-197.675-149.333-360.235-341.333-381.483z"></path>
      </svg> */}
      <h2>{props.shelon.name}</h2>
      <ListSubject
        setChosenSubjectIndex={setChosenSubjectIndex}
        setChosenSubject={setChosenSubject}
        shelon={props.shelon}
      />
      {chosenSubject && (
        <ChosenSubject
          chosenSubjectIndex={chosenSubjectIndex}
          ans={ans}
          setAns={setAns}
          chosenSubject={chosenSubject}
        />
      )}

      <Send ans={ans}  />
    </div>
  );
};

export default Shelon;
