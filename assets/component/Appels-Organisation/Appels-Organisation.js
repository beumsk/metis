import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SelectFunction from "./Filtres/Select-Fonction";
import ReactLoading from "react-loading";
import SelectEquipe from "./Filtres/Select-Equipe";
import SelectLimitHistoric from "./Filtres/Select-LimitHistoric";
import SelectReferent from "./Filtres/Select-Referent";
import TypeCalls from "./Filtres/Select-TypeCalls";
import { FormSelect } from "react-bootstrap";
import ModalActionsAppels from "./Modal-Actions-Appels/Modal-Actions-Appels";
function AppelsOrganisation() {
  const [auth, setAuth] = useState(useAuth());
  const [patientsList, setPatientsList] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [functionSelected, setFunctionSelected] = useState(null);
  const [teamSelected, setTeamSelected] = useState(null);
  const [limitHistoricSelected, setLimitHistoricSelected] = useState(null);
  const [referentSelected, setReferentSelected] = useState(null);
  const [typeCallsSelected, setTypeCallsSelected] = useState(null);
  const [typeCallsSelect, setTypeCallsSelect] = useState(null);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  formData.append("antenna", auth.antenna);
  formData.append("typeCalls", "running");
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationRunning",
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

  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  function onChangeFunction(e) {
    setFunctionSelected(e);
  }

  function onChangeTeam(e) {
    setTeamSelected(e);
  }
  function onChangeLimitHistoric(e) {
    setLimitHistoricSelected(e);
  }
  function onChangeTypeCalls(e) {
    setTypeCallsSelected(e);
  }

  function onClickReferent(e) {
    setReferentSelected(e);
  }

  const sentFilters = (e) => {
    console.log(e);
    var formData = new FormData();
    // formData.append("page", lengthList.toString());

    formData.append("antenna", auth.antenna);

    if (referentSelected !== null) {
      formData.append("referent", referentSelected);
    }

    if (typeCallsSelected !== null) {
      formData.append("typeCalls", typeCallsSelected);
    }
    if (limitHistoricSelected !== null) {
      formData.append(
        "limitHistoric",
        new Date(limitHistoricSelected).toISOString()
      );
    }

    if (teamSelected !== null) {
      formData.append("team", teamSelected);
    }

    if (functionSelected !== null) {
      formData.append("function", functionSelected);
    }

    axios({
      method: "post",
      url: "/api/getCallsAndOrganisationRunning",
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

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Tous les Appels</h3>
        <div className="container-filters">
          <TypeCalls onChangeTypeCalls={onChangeTypeCalls}></TypeCalls>
          <SelectFunction
            onChangeFunction={(e) => onChangeFunction(e)}
          ></SelectFunction>
          <SelectEquipe onChangeTeam={(e) => onChangeTeam(e)}></SelectEquipe>
          <SelectLimitHistoric
            onChangeLimitHistoric={(e) => onChangeLimitHistoric(e)}
          ></SelectLimitHistoric>
          <SelectReferent
            onClickReferent={(e) => onClickReferent(e)}
          ></SelectReferent>
          <button onClick={sentFilters}>Appliquer les filtres</button>
        </div>

        {patientsList &&
        patientsList?.data &&
        patientsList?.data?.length > 0 ? (
          <>
            {patientsList.data.map((patient) => (
              <>
                {patient?.goalsInformation?.length > 0 && (
                  <Accordion className="my-3">
                    <Accordion.Item eventKey={patient.id} key={patient.id}>
                      <Accordion.Header>
                        <div className="col-sm-1">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="col-sm-4">
                          {patient.firstname} {patient.lastname}
                          <Link
                            className="seeProfil"
                            from={"/appels-organisation"}
                            to={"/appels-organisation/" + patient.id}
                          >
                            Voir profil
                          </Link>
                        </div>
                        <div className="col-sm-4">{patient.description}</div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="row body-accordeonitemPatient">
                          {patient.goalsInformation.map((e) => (
                            <div className="row">
                              <div className="col-sm-2 container-informationNames">
                                {e.patientfirstName}
                                {e.patientLastName}
                              </div>
                              <div className="col-sm-8 container-appelDescription">
                                {e.description}
                              </div>
                              <div className="col-sm-2 container-appelDescription">
                                <select value={typeCallsSelect}>
                                  <option value={1}>
                                    Création rapport appel sortant
                                  </option>
                                  <option value={2}>
                                    Création rapport appel entrant
                                  </option>
                                  <option value={3}>Annuler l'appel</option>
                                  <option value={4}>
                                    Déclarer l'appel comme absent
                                  </option>
                                </select>
                                <ModalActionsAppels
                                  listCalls={patient.goalsInformation}
                                  defaultValueContact={patient}
                                  listContacts={patientsList?.data}
                                  defaultValueGoalsValue={e}
                                ></ModalActionsAppels>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                )}
              </>
            ))}

            <button className="btn-metis" onClick={readMore}>
              Read More
            </button>
          </>
        ) : (
          <ReactLoading
            type={"spin"}
            color={"#ffffff"}
            height={"20%"}
            width={"20%"}
          />
        )}
      </div>
    </>
  );
}

export default AppelsOrganisation;
