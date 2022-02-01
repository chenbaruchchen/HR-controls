import React, { useState } from "react";

import PropTypes from "prop-types";

import TabsHome from "./TabsHome/TabsHome";
import ListRooms from "./ListRooms/ListRooms";
import "./home.css";

const Home = (props) => {
  const [tab, setTab] = useState(0);
  return (
    <div className="home-home">
      <header className="home-header">
        <span>{props.Text}</span>
        <TabsHome setTab={setTab} rootClassName="rootClassName"></TabsHome>
      </header>

      {tab == 0 && <ListRooms />}
    </div>
  );
};

Home.defaultProps = {
  Text: "שלום חן"
};

Home.propTypes = {
  Text: PropTypes.string
};

export default Home;
