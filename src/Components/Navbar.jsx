import React, { useContext } from "react";
import { Authcontext } from "../Context/Authcontext";
import { Login } from "./Login";
import LogOut from "./LogOut";

const Navbar = () => {
  let { isAuth, Token } = useContext(Authcontext);

  return (
    <div>
      {/* <Login /> */}
      {isAuth ? <LogOut Token={Token} /> : <Login />}
      {isAuth ? "Login Succesfull" : "Login to proceed"}
    </div>
  );
};

export default Navbar;
