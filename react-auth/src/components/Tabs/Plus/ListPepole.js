import axios from "axios";
import { useState, useEffect } from "react";
import { UserPlus, UserMinus } from "react-feather";
import "./listUsers.css";
import "./add-room.css";
import useToken from "../../useToken";
const list = {
  padiing: 20,
  boxSizing: "border-box",
  width: "80%",
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll",
};

let itemStyle = {
  boxSizing: "border-box",
  width: "80%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  margin: 10,
};
const button = {
  flex: 1,
  padding: 5,
  width: "100px",
  height: "100%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "green",
  overflow: "visible",
  borderRadius: 50,
};
let pepolesList = [{ name: "chen" }, { name: "or" }, { name: "tamar" }];

export default function List() {
  const [pepoles, setPepoles] = useState(pepolesList);
  const [text, setText] = useState("");
  let token = useToken().token;
  useEffect(() => {
    function getUsers() {
      axios
        .get("/api/secret/getUsers", {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          pepolesList = res.data;
          setPepoles(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getUsers();
  }, []);

  let chosen = [];

  function updateChosen(pepole, type) {
    if (type === "add") {
      let chosenHelp = [...chosen];
      chosenHelp.push(pepole);
      chosen = chosenHelp;
    } else {
      /////remove obj by value from arr

      for (var i = 0; i < chosen.length; i++) {
        if (chosen[i] === pepole) {
          chosen.splice(i, 1);
        }
      }
    }
  }
  console.log(chosen);

  function addRoom() {
    console.log(chosen);
    axios
      .post(
        "/api/secret/createRoom",
        { chosen, text },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("נוסף בהצלחה");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  let pepolesListItems = pepoles.map((pepole) => (
    <Pepole updateChosen={updateChosen} pepole={pepole} />
  ));
  return (
    <div className="add-room-container">
      <div className="add-room-head">
        <h1>Heading</h1>
      </div>

      <input
        className="add-room-name"
        onChange={(e) => setText(e.target.value)}
      />

      <div className="add-room-list">
        <h4>בחירת משתתפים</h4>
        {pepolesListItems}
      </div>

      <div onClick={() => addRoom()} className="add-room-name1">
        <span className="add-room-text4">צור</span>
      </div>
    </div>
  );
}

function Pepole(props) {
  const [isChosen, setIsChosen] = useState(false);

  let classname = "itemStyle";

  if (isChosen) {
    classname = "add-room-open";

    props.updateChosen(props.pepole, "add");
  } else {
    classname = "add-room-close";

    props.updateChosen(props.pepole, "remove");
  }

  // let Element=  <div className={isChosen?"add-room-container1":}>
  // <svg viewBox="0 0 1024 1024" className="add-room-icon">
  //   <path d="M640 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM256 426h128v86h-128v128h-86v-128h-128v-86h128v-128h86v128zM640 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
  // </svg>
  // <span className="add-room-text1">Text</span>
  // <svg viewBox="0 0 1024 1024" className="add-room-icon02">
  //   <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
  //   <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-320v-64h320v64z"></path>
  // </svg>
  // </div>

  {
    /* <div className={classname} style={itemStyle}>
<UserPlus onClick={()=> setIsChosen(true)} />
 {props.pepole.username}
 <UserMinus onClick={()=> setIsChosen(false)} />
 </div> */
  }
  // return(<div className={isChosen? "add-room-container1":"add-room-container2"}>
  return (
    <div className={classname}>
      <svg
        onClick={() => setIsChosen(true)}
        viewBox="0 0 1024 1024"
        className="add-room-icon05"
      >
        <path d="M640 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM256 426h128v86h-128v128h-86v-128h-128v-86h128v-128h86v128zM640 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
      </svg>
      <span className="add-room-text2">{props.pepole.username}</span>
      <svg
        onClick={() => setIsChosen(false)}
        viewBox="0 0 1024 1024"
        className="add-room-icon07"
      >
        <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
        <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-320v-64h320v64z"></path>
      </svg>
    </div>
  );
}
