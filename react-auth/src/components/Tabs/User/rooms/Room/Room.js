// import Chat from '../../../../chat/Chat2'
import Chat from "../../../../chat/Chat";
// import Bikoret from './bikoret/Bikoret'
import Bikoret from "./bikoret-desgine/Bikoret";

import { useState } from "react";
import "./tabs.css";
export default function Room(props) {
  const [openBikoret, setOpenBikoret] = useState(true);
  return (
    <div style={{ borderRadius: "30px" }} className="App">
      {alert(props.chosen)}

      <Tabs setOpenBikoret={setOpenBikoret} />
      {openBikoret ? (
        <Bikoret roomId={props.chosen} />
      ) : (
        <Chat roomId={props.chosen} />
      )}
    </div>
  );
}
function Tabs(props) {
  return (
    <div className="tabs">
      <div onClick={() => props.setOpenBikoret(true)}>bikoret</div>
      <div onClick={() => props.setOpenBikoret(false)}>chat</div>
    </div>
  );
}
