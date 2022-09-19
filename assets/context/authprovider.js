import React, { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "./user";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
