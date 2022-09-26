// import Register from "./components/Register";
import React, { useContext, useDebugValue } from "react";
import Login from "./component/Login";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Editor from "./component/Editor";
import Admin from "./component/Admin";
import Missing from "./component/Missing";
import Unauthorized from "./component/Unauthorized";
import Lounge from "./component/Lounge";
import LinkPage from "./component/LinkPage";
import RequireAuth from "./component/RequireAuth";
import PersistLogin from "./component/PersistLogin";
import { Routes, Route } from "react-router-dom";

import Patients from "./component/Patients";
import RepportCalls from "./component/list_reportCalls";
import RepportGoals from "./component/list_reportGoals";

import Patient from "./component/Patient";
import "./styles/app.scss";

const ROLES = {
  User: "ROLE_USER",
  Admin: "ROLE_ADMIN",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="connect" element={<Login />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />}></Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="patients" element={<Patients />} />
            <Route path=":id" element={<Patient />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
