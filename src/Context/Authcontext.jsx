import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [isAuth, setIsauth] = useState(false);

  const toggleAuth = () => {
    setIsauth(!isAuth);
  };

  return (
    <Authcontext.Provider value={{ toggleAuth, isAuth }}>
      {children}
    </Authcontext.Provider>
  );
};
