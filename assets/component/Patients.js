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
import { useParams } from "react-router-dom";
import moment from "moment";
function Patients() {
  const [auth, setAuth] = useState(useAuth());
  const [patientsList, setPatientsList] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [searchNamePatient, setSearchNamePatient] = useState(null);
  const [searchDateBirth, setDateBirth] = useState(null);
  const [typePatient, setTypePatient] = useState(null);
  const [typeSelectPatient, setTypeSelectPatient] = useState(null);
  const [query, setQuery] = useState(null);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  formData.append("antenna", auth.antenna);

  // const anchor = document.getElementById("myAnchor");

  useEffect(() => {
    if (window.location.search && window.location.search !== "?q=") {
      // const queryString = window.location.search;
      const params = new URLSearchParams(window.location.search);
      let query = params.get("q");
      //
      if (params.get("q")) {
        let query = params.get("q");
        setQuery(query);
        if (query) {
          formData.append("searchNamePatient", query);
          formData.append("page", 10);
        }

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
            setPatientsList(response);
          })
          .catch(function (response) {});

        // document.getElementById("btn-search").click();
      }
    } else {
      if (searchNamePatient) {
        formData.append("searchNamePatient", searchNamePatient);
      }
      if (searchDateBirth) {
        formData.append("searchDateBirthPatient", searchDateBirth);
      }
      if (typeSelectPatient && typeSelectPatient !== "0") {
        formData.append("typeSelectPatient", typeSelectPatient);
      }

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
    }

    var suggestion = new FormData();
    suggestion.append("id", 100);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: suggestion,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setTypePatient(response.data);
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  const onSubmitFilter = (e) => {
    e.preventDefault();

    if (searchNamePatient) {
      formData.append("searchNamePatient", searchNamePatient);
    }
    if (searchDateBirth) {
      formData.append(
        "searchDateBirthPatient",
        moment(searchDateBirth).utc("UTC+01:00").format("YYYY-MM-DD")
      );
    }
    if (typeSelectPatient && typeSelectPatient !== "0") {
      formData.append("typeSelectPatient", typeSelectPatient);
    }

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
        setPatientsList(response);
      })
      .catch(function (response) {});
  };

  if (typePatient) {
  }
  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients ">
        <h1 color="white" className="mb-3">
          Liste des patients
        </h1>
        <form className="container-filter">
          <div className="row">
            <div className="col-sm-3">
              <input
                type="text"
                className="uk-input"
                placeholder="Tapez le nom du patient"
                onChange={(e) => setSearchNamePatient(e.target.value)}
                defaultValue={query}
              />
            </div>

            {/* MUST TO HAVE : surnom */}
            <div className="col-sm-3">
              <input
                type="date"
                className="uk-select"
                onChange={(e) => setDateBirth(e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <Form.Select
                onChange={(e) => setTypeSelectPatient(e.target.value)}
                value={typeSelectPatient}
                className="uk-select"
              >
                <option value={0}>Sélectionnez le type de patient</option>

                {/* referentList */}
                {typePatient?.map((type) => (
                  <option value={type.idvalue} key={type.idvalue}>
                    {type.value}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className="col-sm-3">
              <Button
                onClick={(e) => onSubmitFilter(e)}
                id="btn-search"
                className="btn-metis"
                type="submit"
              >
                Filtrer
              </Button>
            </div>
          </div>
        </form>

        {patientsList && patientsList.data && patientsList.data.length > 0 && (
          <>
            {patientsList.data.map((patient) => (
              <Accordion className="my-3" key={patient.id}>
                <Accordion.Item eventKey={patient.id} key={patient.id}>
                  <Accordion.Header>
                    <div className="col-sm-1">
                      {patient?.medias &&
                      patient?.medias.length > 0 &&
                      patient?.medias[0]?.absolutePath ? (
                        <img src={patient.medias[0].absolutePath} width="50" />
                      ) : (
                        <FontAwesomeIcon icon={faUser} />
                      )}
                    </div>
                    <div className="col-sm-2">
                      {patient.firstname} {patient.lastname} {patient.nicknames}
                      <Link className="seeProfil" to={"/" + patient.id}>
                        Voir profil
                      </Link>
                    </div>
                    <div className="col-sm-2">
                      {patient.birthdate &&
                        moment(patient?.birthdate)
                          .utc("UTC+01:00")
                          .format("DD-MM-YYYY")}
                    </div>

                    <div className="col-sm-3">{patient.birthLocation}</div>
                    <div className="col-sm-3">
                      {patient.status ? (
                        <span className="status">
                          <>{patient.status}</>
                        </span>
                      ) : (
                        <span>Pas de status</span>
                      )}
                    </div>
                    {/* <div className="col-sm-3">{Date.now()}</div> */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row body-accordeonitemPatient">
                      <p>
                        <b>Activités</b>
                      </p>
                      {patient?.fore?.map((f, id) => (
                        <div key={id}>
                          {f?.activityType === 1 && (
                            <p>
                              Rapport de rencontre{" "}
                              {new Date(f.lastUpdate).toLocaleDateString()}
                            </p>
                          )}
                          {f?.activityType === 2 && (
                            <p>
                              Appel sortant{" "}
                              {new Date(f.lastUpdate).toLocaleDateString()}
                            </p>
                          )}
                          {f?.activityType === 4 && (
                            <p>
                              Appel entrant{" "}
                              {new Date(f.lastUpdate).toLocaleDateString()}
                            </p>
                          )}
                          {f?.activityType === 4 && (
                            <p>
                              Rapport de rencontre{" "}
                              {new Date(f.lastUpdate).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      ))}
                      {/* <div className="col-sm-4">
                        <b>Dernière activité</b>
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
                      </div> */}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
            {patientsList.data && patientsList.data.length === 10 && (
              <button className="btn-metis" onClick={readMore}>
                Afficher plus
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Patients;
