import OnTop from "../../../../ui-element/on-top/on-top";
import "./calculator.css";
import shelonim from "../../../../../files/shelonim";
import Quatsion from "../../../User/rooms/Room/bikoret-desgine/Quatsion";
import { useState } from "react";

export default function (files, setCalculatorElement) {
  function getFormolaByName(name) {
    let shelonData = "";

    shelonim.forEach((shelon) => {
      if (shelon.name == name) {
        shelonData = shelon;
      }
    });

    return shelonData;
  }

  let rate = null;
  function calculate(file) {
    let shelon = getFormolaByName(file.meta.name);
    let sum = 0;
    let index = 0;

    ///shelon object structure is shelon
    ///filecontain actuel score in each object
    shelon.list.forEach((subject) => {
      console.log(sum);

      ///rate =the precent divided by 100 times rate
      let score = file.ans[index].details;
      //changer rate to number from string
      score = parseInt(score);

      let precent = subject.precent / 100;

      let rate = score * precent;

      sum += rate;
      index++;
    });

    rate = sum;
    alert(`${rate}  התוצאה היא`);
  }

  let list = files.map((file) => {
    return (
      <div onClick={() => calculate(file)} className="chose-file">
        <span className="chose-name">{file.meta.name}</span>
      </div>
    );
  });
  let element = (
    <div className="chose-chose">
      {list}
      <span className="chose-rate">{rate}</span>

      {/* ///close */}

      <svg
        onClick={() => setCalculatorElement(null)}
        viewBox="0 0 1024 1024"
        className="chose-icon"
      >
        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
      </svg>
    </div>
  );

  setCalculatorElement(<OnTop element={element} />);
}
