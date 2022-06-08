import React, { useContext, useState } from "react";
import { Authcontext } from "../Context/Authcontext";

export const Login = () => {
  let { toggleAuth, Token } = useContext(Authcontext);
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [tok, setTok] = useState("");

  const handledatapost = () => {
    toggleAuth();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        Token = d.token;
        setTok(d.token);
        localStorage.setItem("id", d.token);
        // console.log("TOKENLOGIN",TOKEN)
        console.log(d.token);
        console.log("email", email);
        console.log("pass", pass);
      });
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
    console.log(email);
  };

  const handlepassword = (e) => {
    setpass(e.target.value);
    console.log(pass);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter Email"
        // value="eve.holt@reqres.in"
        onChange={handleEmail}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={handlepassword}
        // value="cityslicka"
      />
      <button onClick={() => handledatapost()}>Log in</button>

      {/* <form onSubmit={() => handledatapost()}>
        <input type="email" placeholder="Enter Email" onChange={handleEmail} />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlepassword}
        />
        <button type="submit">Log in</button>
      </form> */}
    </div>
  );
};
