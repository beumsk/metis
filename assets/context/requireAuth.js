import React, { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "./user";

const RequireAuth = () => {
  let useAuth = () => useContext(AuthContext);
  let { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={{ pathname: "/unauthorized", state: { from: location } }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
