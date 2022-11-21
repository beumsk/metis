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
import Statistiques from "./component/Statistiques/Statistiques";
import RepportCalls from "./component/list_reportCalls";
import RepportGoals from "./component/list_reportGoals";
import ProfilAppel from "./component/Appels-Organisation/Profil-Appel/Profil-Appel";

import Patient from "./component/Patient";
import AppelsOrganisation from "./component/Appels-Organisation/Appels-Organisation";
import ContactOrganisations from "./component/Administration/Contact-Organisation/Contact-Organisation";
import Anniversaire from "./component/Administration/Anniversaire/Anniversaire";
import Lieux from "./component/Administration/Lieux/Lieux";
import "./styles/app.scss";
import ProfilLieux from "./component/Administration/Lieux/Profil-Lieux/Profil-Lieux";
import ProfilContact from "./component/Administration/Contact-Organisation/Profil-Contact/Profil-Contact";

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
            <Route path="statistiques" element={<Statistiques />} />
            <Route
              path="contactsorganisation"
              element={<ContactOrganisations />}
            />
            <Route
              path="profil-contact/:idContact"
              element={<ProfilContact />}
            />
            <Route path="lieux" element={<Lieux />} />
            <Route path="profil-lieux/:idLieux" element={<ProfilLieux />} />
            <Route path="patients" element={<Patients />} />
            <Route path="anniversaire" element={<Anniversaire />} />
            <Route
              exact
              path="appels-organisation"
              element={<AppelsOrganisation />}
            ></Route>
            <Route
              path="appels-organisation/:idContact"
              element={<ProfilAppel />}
            />
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
