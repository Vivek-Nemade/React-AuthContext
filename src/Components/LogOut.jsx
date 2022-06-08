import React, { useContext } from "react";
import { Authcontext } from "../Context/Authcontext";

const LogOut = () => {
  let { toggleAuth, Token } = useContext(Authcontext);

  const logouthandle = () => {
    toggleAuth();
    // Token = "";
    // localStorage.setItem("id", "");
  };
  let x = localStorage.getItem("id");
  console.log(x);

  return (
    <div>
      <button onClick={logouthandle}>Logout</button>
      <h5>Token No:- {Token}</h5>
    </div>
  );
};

export default LogOut;
