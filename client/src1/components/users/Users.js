import { useContext, useState } from "react";
import { UserContext } from "../../App";
import TabBar from "./TabBar/TabBar1";

import Watch from "./Tabs/Watch/Watch";
import Add from "./Tabs/Add/Add";
import Home from "./Tabs/Home/Home";
function Users() {
  const [tab, setTab] = useState(0);
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="App" style={{ width: "100vw", minHeight: "100vh" }}>
      <div>
        <h3>hello 
           {' '+user.user.username }
           </h3>
        <button onClick={() => setUser(null)}>log out</button>
      </div>

      {tab === 0 && <Home />}
      {tab === 1 && <Add />}
      {tab === 2 && <Watch />}

      <TabBar setTab={setTab} />
    </div>
  );
}

export default Users;
