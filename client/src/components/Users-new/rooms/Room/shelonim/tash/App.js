import "./styles.css";

import ChoseShelon from "./components/chose-shelon/chose-shelon";
import Shelon from "./components/shelon/shelon";
import { useState } from "react";
export default function App() {
  const [shelon, setShelon] = useState(null);
  return (
    <div  className="App">
      <h1>ביקורות ת"ש</h1>

      <div>שדות כלליים</div>

      {shelon ? (
        <Shelon setShelon={setShelon} shelon={shelon} />
      ) : (
        <ChoseShelon setShelon={setShelon} />
      )}
    </div>
  );
}
