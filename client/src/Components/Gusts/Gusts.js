import Users from "./Users/Users";
function Gusts(props) {
  return (
    <div className="App">
      Gusts
      <br />
      <Users setUser={props.setUser} />
    </div>
  );
}

export default Gusts;
