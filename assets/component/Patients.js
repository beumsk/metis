import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PersistLogin from "./PersistLogin";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
function Patients() {
  const [auth, setAuth] = useState(useAuth());
  const [patientsList, setPatientsList] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [searchNamePatient, setSearchNamePatient] = useState(null);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  formData.append("antenna", auth.antenna);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setPatientsList(response);
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  const onSubmitFilter = (e) => {
    formData.append("searchNamePatient", searchNamePatient);
    axios({
      method: "post",
      url: "/api/getPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setPatientsList(response);
      })
      .catch(function (response) {});
  };
  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Tous les patients</h3>
        <div className="container-filter">
          <input
            type="text"
            onChange={(e) => setSearchNamePatient(e.target.value)}
          />
          <Button onClick={(e) => onSubmitFilter(e)}>Filtrer</Button>
        </div>

        {patientsList && patientsList.data && patientsList.data.length > 0 && (
          <>
            {patientsList.data.map((patient) => (
              <Accordion className="my-3">
                <Accordion.Item eventKey={patient.id} key={patient.id}>
                  <Accordion.Header>
                    <div className="col-sm-1">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="col-sm-2">
                      {patient.firstname} {patient.lastname}
                      <Link className="seeProfil" to={"/" + patient.id}>
                        Voir profil
                      </Link>
                    </div>
                    <div className="col-sm-2">
                      {new Date(patient.birthdate).toLocaleDateString()}
                    </div>

                    <div className="col-sm-3">{patient.birthLocation}</div>
                    <div className="col-sm-1">
                      <span className="status">{patient.status}</span>
                    </div>
                    {/* <div className="col-sm-3">{Date.now()}</div> */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row body-accordeonitemPatient">
                      <div className="col-sm-4">
                        <b>Dernière activitée</b>
                        <p>Rapport de rencontre 12/08/2021</p>
                        <p>Rapport de rencontre 20/08/2022</p>
                        <p>Rapport de rencontre 14/09/2022</p>
                      </div>
                      <div className="col-sm-2">
                        <b>Hygiène</b>
                        <p>Google Agenda</p>
                      </div>
                      <div className="col-sm-2">
                        <b>Santée mentale</b>
                        <p>Google Agenda</p>
                      </div>
                      <div className="col-sm-2">
                        <b>Liens</b>
                        <p>Google Agenda</p>
                      </div>
                      <div className="col-sm-2">
                        <b>Autres détails</b>
                        <p>Sans papiers</p>
                        <p>Inscris au logement social</p>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
            <button className="btn-metis" onClick={readMore}>
              Read More
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Patients;
