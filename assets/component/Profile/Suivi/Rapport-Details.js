import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faPhone,
  faPen,
  faHouseSignal,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Editor from "./Editor-Reports";
import Form from "react-bootstrap/Form";
import ReactLoading from "react-loading";
import AddReportMeet from "./Add-Report-Meet";
import EditReportMeet from "./Edit-Report-Meet";
import EditNoReportMeet from "./EditNotReportMeet";
import FilterRapportDetails from "./Filters-RapportsDetails";
import IndicateursActiviteesComponent from "./Indicateurs-Activitées-Component";
import DeleteRapports from "./Delete-Rapports";
function RapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  const [numberReports, setNumberReports] = useState(10);
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  var reportData = new FormData();
  reportData.append("id", id.toString());
  reportData.append("number", numberReports);
  var funcAppelFormData = new FormData();
  funcAppelFormData.append("id", 658);

  var valueFormData = new FormData();
  valueFormData.append("id", 174);
  //reportData.append("countResult", 10);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [filterTextContentRapport, setFilterTextContentRapport] =
    useState(null);
  const [filterDateContentRapport, setFilterDateContentRapport] =
    useState(null);

  const [filterTypeOfReports, setTypeOfRepports] = useState(null);

  const [informations, setInformations] = useState(null);
  const [type, setType] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [whatDoinFunction, setWhatDoinFunction] = useState(null);
  const [selectActivities, setSelectActivities] = useState(null);
  const [selectSoins, setSelectSoins] = useState(null);

  useEffect(() => {
    var formDataActivities = new FormData();
    formDataActivities.append("id", 106);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataActivities,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setSelectActivities(response);
      })
      .catch(function (response) {});

    var formDataActivities = new FormData();
    formDataActivities.append("id", 108);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataActivities,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setSelectSoins(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: funcAppelFormData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setFonction(response);
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformations(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  function onChangeNumber(e) {
    var reportData = new FormData();
    reportData.append("id", id.toString());
    setNumberReports(numberReports + 10);
    reportData.append("number", numberReports);

    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformations(response);
      })
      .catch(function (response) {});
  }

  function onChangeReport(e) {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
      })
      .catch(function (response) {});

    // setInformations(props.informations);
  }

  function onChangeFilter(e) {
    setInformations(e);
  }
  // const editContent = (e, r) => {
  //   if (e.target.checked === true) {
  //     r.isHightlight = true;
  //     setInformations(informations);
  //   }

  //   if (e.target.checked === false) {
  //     r.isHightlight = false;
  //     axios({
  //       method: "post",
  //       url: "/api/getFollowUpReportsById",
  //       data: reportData,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${auth.auth.accessToken}`,
  //       },
  //     })
  //       .then(function (response) {
  //         setInformations(response);
  //       })
  //       .catch(function (response) {});
  //   }
  // };

  useEffect(() => {
    if (props.search !== null) {
      setInformations(props.search);
    }
  }, [props.search]);

  function onChangeDelete() {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformations(response);
      })
      .catch(function (response) {});
  }

  function onChangeIndicators() {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformations(response);
      })
      .catch(function (response) {});
  }

  function onChangeActivities() {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformations(response);
      })
      .catch(function (response) {});
  }

  function switchEditMode(e) {}

  useEffect(() => {
    if (!toggle) {
      informations?.data.forEach((element) => {
        element.isShow = false;
      });
      setInformations(informations);
      axios({
        method: "post",
        url: "/api/getFollowUpReportsById",
        data: reportData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          setInformations(response);
        })
        .catch(function (response) {});
    }
  }, [toggle]);

  const ToggleEdit = ({ r }) =>
    toggle ? (
      <></>
    ) : (
      <div className="row-btnRapport">
        <DeleteRapports
          idRapport={r.id}
          onChangeDelete={onChangeDelete}
        ></DeleteRapports>
        {(r.activityType === 1 ||
          r.activityType === 4 ||
          r.activityType === 3 ||
          r.activityType === 2) && (
          <Form.Check id={r.id}>
            <Form.Check.Input
              type="checkbox"
              checked={toggle}
              defaultChecked={r.isShow}
              className="uk-checkbox"
              onChange={(e) => {
                // setToggle(!toggle);

                if (e.target.checked === true) {
                  setToggle(true);
                  r.isShow = true;

                  setInformations(informations);
                }

                // if (e.target.checked === false) {
                //   setToggle(false);
                //   r.isShow = false;

                //   setInformations(informations);
                //   axios({
                //     method: "post",
                //     url: "/api/getFollowUpReportsById",
                //     data: reportData,
                //     headers: {
                //       "Content-Type": "application/json",
                //       Authorization: `Bearer ${auth.auth.accessToken}`,
                //     },
                //   })
                //     .then(function (response) {
                //       setInformations(response);
                //     })
                //     .catch(function (response) {});
                // }

                // if (r.isHightlight === false) {
                //   setToggle(!toggle);
                //   r.isShow = toggle;

                //   setInformations(informations);
                // }
              }}
            />
            <Form.Check.Label>Activer le mode édition</Form.Check.Label>
          </Form.Check>
        )}
      </div>
    );

  return (
    <>
      <FilterRapportDetails
        onChangeFilter={onChangeFilter}
      ></FilterRapportDetails>

      {informations && informations?.data && informations?.data?.length > 0 ? (
        <>
          {informations?.data.map((r, id) => (
            <div
              key={id}
              className="suivi-card mt-4 mb-4"
              style={
                r.activityType === 1 || r.activityType === 3
                  ? { border: "2px solid #BACC8C" }
                  : { border: "2px solid #9c5fb5" }
              }
            >
              <ToggleEdit r={r} />

              {r && r.deletedAt === null && (
                <>
                  {r && r.activityType === 1 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faFilePen}
                        style={{ marginRight: "4px" }}
                      />
                      Rapport de rencontre
                    </h3>
                  )}

                  {r.type === 1 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faHouseSignal}
                        style={{ marginRight: "4px" }}
                      />
                      Objectif
                    </h3>
                  )}

                  {r && r.activityType === 2 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "4px" }}
                      />
                      Appel Sortant
                    </h3>
                  )}

                  {r && r.activityType === 4 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "4px" }}
                      />
                      Appel Entrant
                    </h3>
                  )}

                  {r && r.activityType === 3 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faFilePen}
                        style={{ marginRight: "4px" }}
                      />
                      Rapport de réunion
                    </h3>
                  )}

                  {r && r.cont === null && r.type === 2 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "4px" }}
                      />
                      Appel Sortant
                    </h3>
                  )}

                  {r && r?.cont?.id && r.type === 2 && (
                    <h3 className="suivi-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "4px" }}
                      />
                      Appel Entrant
                    </h3>
                  )}
                  {/* const [selectActivities, setSelectActivities] = useState(null);
  const [selectSoins, setSelectSoins] = useState(null); */}
                  {r.isShow === true && (
                    <>
                      <EditReportMeet
                        informationPatient={r}
                        type={type}
                        setToggle={setToggle}
                        onChangeIndicators={onChangeIndicators}
                        onChangeActivities={onChangeActivities}
                        goals={props?.goals}
                        goalsList={props?.goalsList}
                        selectActivities={selectActivities}
                        selectSoins={selectSoins}
                        contacts={props?.contacts}
                        places={props?.places}
                        activityType={r.activityType}
                        onChangeReportMeet={onChangeReport}
                        indicatorsResponse={r.followupReportsIndicators}
                      ></EditReportMeet>
                    </>
                  )}
                  {r.isShow === false && (
                    <>
                      {/* <IndicateursActiviteesComponent></IndicateursActiviteesComponent> */}
                      <EditNoReportMeet
                        indicators={r.followupReportsIndicators}
                        rapport={r}
                        selectActivities={selectActivities}
                        onChangeIndicators={onChangeIndicators}
                        onChangeActivities={onChangeActivities}
                        activityType={r.activityType}
                        selectSoins={selectSoins}
                        contacts={props?.contacts}
                        places={props?.places}
                      ></EditNoReportMeet>
                    </>
                  )}

                  {/* {r.isShow === null && (
                    <>
                      <EditNoReportMeet
                        indicators={r.followupReportsIndicators}
                        rapport={r}
                      ></EditNoReportMeet>
                    </>
                  )} */}
                </>
              )}

              <ToggleEdit r={r} />
            </div>
          ))}

          <button className="btn-metis" onClick={(e) => onChangeNumber()}>
            READ MORE
          </button>
        </>
      ) : informations ? (
        <p>Pas de rapport pour ce contact</p>
      ) : (
        <ReactLoading
          type={"spin"}
          color={"#B1B1B1"}
          height={"10%"}
          width={"10%"}
        />
      )}
    </>
  );
}

// render(<Modal />);

export default RapportDetails;
