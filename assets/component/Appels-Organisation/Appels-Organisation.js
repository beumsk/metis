import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import SelectFunction from "./Filtres/Select-Fonction";
import ReactLoading from "react-loading";
import SelectEquipe from "./Filtres/Select-Equipe";
import SelectLimitHistoric from "./Filtres/Select-LimitHistoric";
import SelectReferent from "./Filtres/Select-Referent";
import TypeCalls from "./Filtres/Select-TypeCalls";
import { FormSelect } from "react-bootstrap";
import ModalActionsAppelsEntrant from "./Modal-Actions-Appels/Modal-Actions-AppelsEntrant";
import ModalActionsAppelSortant from "./Modal-Actions-Appels/Modal-Actions-AppelSortant";
import ModalHistorique from "./Modal-Historique/ModalHistorique";
import ModalCallCanceled from "./Modal-Actions-Appels/Modal-Call-Canceled";
import ModalCallMissing from "./Modal-Actions-Appels/Modal-Call-Missing";
import moment from "moment";
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
  formData.append("typeCalls", true);
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
        console.log(response);
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
    var formData = new FormData();
    // formData.append("page", lengthList.toString());

    formData.append("antenna", auth.antenna);

    if (referentSelected !== null && referentSelected.length !== 0) {
      formData.append("referent", JSON.stringify(referentSelected));
    }

    if (typeCallsSelected !== null && typeCallsSelected.length !== 0) {
      formData.append("typeCalls", JSON.stringify(typeCallsSelected));
    }
    if (limitHistoricSelected !== null) {
      formData.append(
        "limitHistoric",
        new Date(limitHistoricSelected).toISOString()
      );
    }

    if (teamSelected !== null && teamSelected.length !== 0) {
      formData.append("team", JSON.stringify(teamSelected));
    }

    if (functionSelected !== null && functionSelected.length !== 0) {
      formData.append("function", [JSON.stringify(functionSelected)]);
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

  function onChangeResponseDatas(e) {
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
        console.log(patientsList);
      })
      .catch(function (response) {});
  }
  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h1 className="mb-3">Tous les Appels</h1>
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
          <button className="btn-metis mt-2 mb-4" onClick={sentFilters}>
            Appliquer les filtres
          </button>
        </div>

        {patientsList && patientsList?.data ? (
          <>
            {patientsList.data.map((patient) => (
              <>
                <Accordion className="my-3">
                  <Accordion.Item eventKey={patient.id} key={patient.id}>
                    <Accordion.Header>
                      <div className="col-sm-1">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="col-sm-4">
                        {patient.firstname} {patient.lastname}
                      </div>
                      <div className="col-sm-4">{patient.description}</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className=" body-accordeonitemPatient">
                        {patient.patients.map((e) => (
                          <>
                            <div
                              className="row"
                              style={{ backgroundColor: "#eaeaea" }}
                            >
                              <div className="col-sm-2 container-informationNames">
                                {e.patientfirstName}
                                {e.patientLastName}
                              </div>
                              <div className="col-sm-4 container-informationNames">
                                {moment(e?.creationDate)
                                  .utc("UTC+01:00")
                                  .format("YYYY-MM-DD")}
                                {"|"}
                                {e.func.value} {e.description}
                              </div>
                              <div className="col-sm-4 container-appelDescription">
                                {e.description}
                              </div>

                              <div className="col-sm-2 container-appelActions">
                                <ModalActionsAppelsEntrant
                                  listCalls={e.fore}
                                  defaultValueContact={patient}
                                  onChangeResponse={onChangeResponseDatas}
                                  typeCall={typeCallsSelect}
                                  listContacts={patientsList?.data}
                                  defaultValueGoalsValue={e}
                                ></ModalActionsAppelsEntrant>

                                <ModalActionsAppelSortant
                                  listCalls={e.fore}
                                  defaultValueContact={patient}
                                  typeCall={typeCallsSelect}
                                  listContacts={patientsList?.data}
                                  onChangeResponse={onChangeResponseDatas}
                                  defaultValueGoalsValue={e}
                                ></ModalActionsAppelSortant>

                                <ModalCallCanceled
                                  goal={e}
                                  onChangeResponse={onChangeResponseDatas}
                                  contact={patient}
                                ></ModalCallCanceled>

                                <ModalCallMissing
                                  goal={e}
                                  onChangeResponse={onChangeResponseDatas}
                                  contact={patient}
                                ></ModalCallMissing>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-2">
                                {e && e.fore.length > 0 && (
                                  <ModalHistorique
                                    foreList={e}
                                  ></ModalHistorique>
                                )}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            ))}

            <button className="btn-metis" onClick={readMore}>
              Afficher plus
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
