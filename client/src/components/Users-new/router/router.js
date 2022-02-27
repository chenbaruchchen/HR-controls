import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddRoom from "../addRoom/addRoom";
import Rooms from "../rooms/Rooms";
import Sidebar1 from "./sidebar/sidebar";
export default function App() {
  return (
   
      <div>
       <Sidebar1/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addRoom">
            <AddRoom />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>

          <Route path="/rooms/">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    
  );
}

function Home() {
  return <h2>Home</h2>;
}
 