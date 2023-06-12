import React, { useEffect, useState } from "react";
import "./chat-new.css";
import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from "./Socket";

import useToken from "../useToken";

import axios from "axios";

import { getEmail } from "../scripts/setUser";

import MyMsg from "./my-massege/my-massege";
import OtherMsg from "./other-massege/other-massege";
import SendMassege from "./send-massege/send-massege";

function getUserFromLocal() {
  let userAndToken = localStorage.getItem("token");

  const user = JSON.parse(userAndToken).user;

  return user;
}
////get older messages

const ChatFigma = (props) => {
  const [room, setRoom] = useState(props.roomId);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [user, setUser] = useState(getUserFromLocal());
  const [sortedChat, setSortedChat] = useState(chat);
  let token = useToken().token;

  useEffect(() => {
    async function getLastTenMessages() {
      await axios
        .post(
          "/api/secret/getLastTenMessages",
          {
            roomId: room,
          },
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        )
        .then((res) => {
          ///list inmessages came in data[0]
          setChat(res.data[0].messages);
        })

        .catch((error) => {
          console.error(error);
        });
    }

    function sortChat() {
      ////sort massege by value each time chat list change

      let newChat = [...chat];
      newChat.sort(function (a, b) {
        return a.value - b.value;
      });
      setSortedChat(newChat);
    }
    getLastTenMessages();

    if (room) initiateSocket(room);
    subscribeToChat((err, data) => {
      if (err) return;
      setChat((oldChats) => [data, ...oldChats]);

      sortChat();
    });
    return () => {
      disconnectSocket();
    };
  }, [room]);

  useEffect(() => {}, []);

  return (
    <div style={{ width: "80vw" }} className="chat-chat">
      {sortedChat !== undefined &&
        chat.map((m, i) => {
          return m.user.email === user.email ? (
            <MyMsg massege={m} />
          ) : (
            <OtherMsg massege={m} />
          );
        })}
      <MyMsg></MyMsg>
      <br /> <br />
      <br /> <br />
      <SendMassege
        send={() => sendMessage(room, message, user)}
        setMessage={setMessage}
        message={message}
      />
    </div>
    //     <div className="chat-container">
    //          <div className="chat-header">
    //           <h1 className="chat-figma-text">
    //             <span>chat : {props.roomId}</span>
    //             <br></br>
    //             <span></span>
    //           </h1>
    //         </div>
    //         chat-list

    //         <div  className="chat-list">

    //         { chat.map((m,i) => (

    //  <div  key={i} className={chackIfMe(m) ? "chat-my-box" : "chat-other-box"}>

    //  <div  className={chackIfMe(m)? "chat-my-msg": "chat-other-msg" }>
    //    <span className="chat-figma-text04">{m.message}</span>
    //  </div>
    //  <span className="chat-figma-text05">{m.user?.username}</span>
    // </div>

    //  ) )}
    //         </div>

    //         <div className="chat-send">
    //         <input
    //         value={message}
    //         onChange={e => setMessage(e.target.value)} className="chat-container1"/>
    //         <svg   onClick={()=> sendMessage(room,message,user)} viewBox="0 0 1024 1024" className="chat-icon">
    //           <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
    //         </svg>
    //       </div>

    //       </div>
  );
};

export default ChatFigma;
