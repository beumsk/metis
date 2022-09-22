import React, { useContext, useDebugValue } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
const Layout = () => {
  return (
    <main className="App">
      <Menu />
      <Outlet />
    </main>
  );
};

export default Layout;
