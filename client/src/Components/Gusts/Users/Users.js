import { useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";
function Users(props) {
  const [openRegister, setOpenRegister] = useState(false);

  if (!openRegister) {
    return <Login setUser={props.setUser} setOpenRegister={setOpenRegister} />;
  }

  return <Register setOpenRegister={setOpenRegister} />;
}

export default Users;
