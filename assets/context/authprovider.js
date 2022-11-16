import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [antenna, setAntenna] = useState(
    localStorage.getItem("antenna") || false
  );
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, persist, setPersist, antenna, setAntenna }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
