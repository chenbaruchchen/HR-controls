import "./styles.css";

import ChoseShelon from "./components/chose-shelon/chose-shelon";
import Shelon from "./components/shelon/shelon";
import { useState } from "react";
import shelonSadir from './files/src'
export default function App() {
  const [shelon, setShelon] = useState(null);
  return (
    <div  className="App">
      <h1>ביקורות סדיר</h1>

      <div>שדות כלליים</div>
      <Shelon setShelon={setShelon} shelon={shelonSadir} />

      {/* {shelon ? (
        <Shelon setShelon={setShelon} shelon={shelon} />
      ) : (
        <ChoseShelon setShelon={setShelon} />
      )} */}
    </div>
  );
}
