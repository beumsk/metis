import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faFilePen,
  faPhone,
  faHouseSignal,
  faSquarePhoneFlip,
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

function RapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  var reportData = new FormData();
  reportData.append("id", id.toString());
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

  useEffect(() => {
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

    console.log(props.search);
    // setInformations(props.informations);
  }

  function onChangeFilter(e) {
    setInformations(e);
  }
  const editContent = (e, r) => {
    if (e.target.checked === true) {
      r.isHightlight = true;
      setInformations(informations);
    }

    if (e.target.checked === false) {
      r.isHightlight = false;
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
  };

  function onChangeInformations(e) {
    console.log(e);
  }

  useEffect(() => {
    console.log(props.search);
    // let obj = {};
    // obj.data = [props.search];
    // console.log(obj);
    // console.log("useEffect logic ran");
    // console.log(informations);
    if (props.search !== null) {
      setInformations(props.search);
    }
  }, [props.search]);

  return (
    <>
      <FilterRapportDetails
        onChangeFilter={onChangeFilter}
      ></FilterRapportDetails>

      {informations && informations.data && informations.data.length > 0 ? (
        <>
          {informations.data.map((r, id) => (
            <div
              key={id}
              className="uk-card uk-card-default uk-card-hover uk-card-body mt-4 mb-4"
              style={
                r.activityType === 1
                  ? { border: "4px solid rgb(120 156 13 / 53%)" }
                  : { border: "4px solid #9c5fb5" }
              }
            >
              {r.activityType === 1 ||
              r.activityType === 4 ||
              r.activityType === 2 ? (
                <Form.Check
                  type="switch"
                  className="switcher"
                  defaultChecked={r.isShow}
                  onClick={(e) => {
                    // setToggle(!toggle);

                    if (e.target.checked === true) {
                      setToggle(true);
                      r.isShow = true;

                      setInformations(informations);
                      console.log(r);
                    }

                    if (e.target.checked === false) {
                      setToggle(false);
                      r.isShow = false;

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

                    // if (r.isHightlight === false) {
                    //   setToggle(!toggle);
                    //   r.isShow = toggle;

                    //   setInformations(informations);
                    // }
                  }}
                  label="Activer le mode édition"
                />
              ) : (
                ""
              )}
              {r && r.deletedAt === null && (
                <>
                  {r && r.activityType === 1 && (
                    <h3 className="uk-card-title">
                      {" "}
                      <FontAwesomeIcon
                        icon={faFilePen}
                        style={{ marginRight: "1rem" }}
                      />
                      Rapport de rencontre
                    </h3>
                  )}

                  {r.type === 1 && (
                    <h3 className="uk-card-title">
                      <FontAwesomeIcon
                        icon={faHouseSignal}
                        style={{ marginRight: "1rem" }}
                      />
                      Objectif
                    </h3>
                  )}

                  {(r && r.activityType === 2) ||
                    (r && r.cont === null && r.type === 2 && (
                      <h3 className="uk-card-title">
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ marginRight: "1rem" }}
                        />
                        Appel Sortant
                      </h3>
                    ))}

                  {(r && r.activityType === 4) ||
                    (r && r?.cont?.id && r.type === 2 && (
                      <h3 className="uk-card-title">
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ marginRight: "1rem" }}
                        />
                        Appel Entrant
                      </h3>
                    ))}

                  {r.isShow === true && (
                    <EditReportMeet
                      informationPatient={r}
                      type={type}
                      goals={props?.goals}
                      contacts={props?.contacts}
                      places={props?.places}
                      onChangeReportMeet={onChangeReport}
                      indicatorsResponse={r.followupReportsIndicators}
                    ></EditReportMeet>
                  )}
                  {r.isShow === false && (
                    <>
                      <EditNoReportMeet
                        indicators={r.followupReportsIndicators}
                        rapport={r}
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
            </div>
          ))}
        </>
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
