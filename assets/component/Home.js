import React, { useState, useContext, useDebugValue, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Form_MeetRapports from "./Form_MeetRapports";
import RepportCalls from "./list_reportCalls";
import RepportGoals from "./list_reportGoals";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const [reportMeet, setReportMeet] = useState(0);
  const [reportCalls, setReportCalls] = useState(0);
  const [reportGoals, setReportGoals] = useState(0);

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };
  let { path, url } = useNavigate();

  const goToRepport = () => {
    history.push("/goals");
  };

  useEffect(() => {
    setReportMeet(true);
    setReportCalls(false);
    setReportGoals(false);
  }, []);

  const onClickRepportMeet = () => {
    setReportMeet(true);
    setReportCalls(false);
    setReportGoals(false);
  };

  const onClickRepportCalls = () => {
    setReportMeet(false);
    setReportCalls(true);
    setReportGoals(false);
  };

  const onClickRepportGoals = () => {
    setReportMeet(false);
    setReportCalls(false);
    setReportGoals(true);
  };

  return (
    <>
      <Menu />
      <div className="container-home row m-0">
        <div className="col-sm-6 d-flex align-items-center justify-content-center">
          <div>
            <h3>Bienvenue sur Métis</h3>
            <p>Cliquez ici pour vos rappels ou éditer un patient:</p>

            <Link onClick={onClickRepportMeet}>
              <FontAwesomeIcon icon={faArrowRight} /> Rapport de rencontre
            </Link>
            <Link onClick={onClickRepportCalls}>
              <FontAwesomeIcon icon={faArrowRight} /> Rapport d'appels
            </Link>
            <Link onClick={onClickRepportGoals}>
              <FontAwesomeIcon icon={faArrowRight} /> Rapport d'objectifs
            </Link>
          </div>
        </div>

        <div className="col-sm-6 d-flex align-items-center justify-content-center container-repports">
          <div className="set-repports">
            {reportMeet && <Form_MeetRapports />}
            {reportCalls && <RepportGoals />}
            {reportGoals && <RepportCalls />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
