import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faFilePen,
  faPhone,
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

function RapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  var reportData = new FormData();
  reportData.append("id", id.toString());
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

  useEffect(() => {
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
  }, [idPatient]);

  const editContent = (e, r) => {
    if (e.target.checked === true) {
      r.isHightlight = true;
      setInformations(informations);
    }

    if (e.target.checked === false) {
      r.isHightlight = false;
      setInformations(informations);
    }
  };

  const onChangeRapportFilter = (e) => {
    if (filterTextContentRapport) {
      reportData.append("setTextRapport", filterTextContentRapport);
    }

    if (filterTypeOfReports) {
      reportData.append("setTypeRapport", filterTypeOfReports);
    }

    if (filterDateContentRapport) {
      reportData.append(
        "setDateRapport",
        new Date(filterDateContentRapport).toISOString()
      );
    }

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
  };
  return (
    <>
      <div className="search-textRapport row">
        <div className="col-sm-4">
          <label class="uk-form-label">Description de rapport</label>
          <input
            type="text"
            className="uk-input"
            defaultValue={filterTextContentRapport}
            onChange={(e) => setFilterTextContentRapport(e.target.value)}
          />
        </div>
        <div className="search-textRapport col-sm-4">
          <label class="uk-form-label">Type de rapport</label>
          <Form.Select
            defaultValue={filterTypeOfReports}
            className="uk-select"
            onChange={(e) => setTypeOfRepports(e.target.value)}
          >
            <option>Choissisez le type de rapport</option>
            <option value={1}>Rapport de rencontre</option>
            <option value={4}>Appel entrant</option>
            <option value={2}>Appel sortant</option>
          </Form.Select>
        </div>
        <div className="search-textRapport col-sm-4">
          <label class="uk-form-label">Rechercher part date</label>
          <input
            type="date"
            className="uk-select"
            defaultValue={filterDateContentRapport}
            onChange={(e) => setFilterDateContentRapport(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button
              onClick={(e) => onChangeRapportFilter(e)}
              class="uk-button uk-button-default mt-4"
            >
              Filtrer
            </button>
          </div>
        </div>
      </div>

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
              {r && r.deletedAt === null && (
                <>
                  <Form.Check
                    type="switch"
                    className="switcher"
                    defaultChecked={r.isHightlight === true}
                    onClick={(e) => {
                      // setToggle(!toggle);

                      if (e.target.checked === true) {
                        setToggle(!toggle);
                        r.isHightlight = toggle;

                        setInformations(informations);
                      }

                      if (e.target.checked === false) {
                        setToggle(!toggle);
                        r.isHightlight = toggle;

                        setInformations(informations);
                      }

                      if (r.isHightlight === false) {
                        setToggle(!toggle);
                        r.isHightlight = toggle;

                        setInformations(informations);
                      }
                    }}
                    label="Activer le mode édition"
                  />
                  {r && r.activityType === 1 && (
                    <h3 class="uk-card-title">
                      {" "}
                      <FontAwesomeIcon
                        icon={faFilePen}
                        style={{ marginRight: "1rem" }}
                      />
                      Rapport de rencontre
                    </h3>
                  )}

                  {r && r.activityType === 2 && (
                    <h3 class="uk-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "1rem" }}
                      />
                      Appel Sortant
                    </h3>
                  )}

                  {r && r.activityType === 4 && (
                    <h3 class="uk-card-title">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ marginRight: "1rem" }}
                      />
                      Appel Entrant
                    </h3>
                  )}

                  {r.isHightlight === true && (
                    <EditReportMeet
                      informationPatient={r}
                      type={type}
                      goals={props?.goals}
                      contacts={props?.contacts}
                      places={props?.places}
                      indicatorsResponse={r.followupReportsIndicators}
                    ></EditReportMeet>
                  )}
                  {r.isHightlight === false && (
                    <>
                      <div className="row">
                        {r.followupReportsIndicators && (
                          <>
                            {r.followupReportsIndicators.map((item, id) => (
                              <div className="row">
                                <h6>Indicateurs</h6>
                                {item.indi.id === 1 && (
                                  <div className="indicators-CVC" bg={"green"}>
                                    CVC
                                  </div>
                                )}

                                {item.indi.id === 6 && (
                                  <div className="indicators-Hestia" bg={"red"}>
                                    HESTIA Logement
                                  </div>
                                )}
                                {item.indi.id === 7 && (
                                  <div
                                    className="indicators-Logement"
                                    bg={"blue"}
                                  >
                                    HESTIA Deces
                                  </div>
                                )}
                                <div className="col-sm-4">
                                  <b>{item.indi.name}</b>
                                </div>
                                <div className="col-sm-8">
                                  {item.indi.description} ({item.value})
                                </div>
                                {/* <div className="col-sm-4">
                                  {item.indi.comment}
                                </div> */}
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="row">
                        {r && r.creationDate && (
                          <h6>
                            Date:{" "}
                            {new Date(r.creationDate).toLocaleString(
                              "fr-BE",
                              "short"
                            )}
                          </h6>
                        )}
                      </div>
                      Description:
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            r.content ||
                            r.description ||
                            "Aucune description donnée pour l'instant",
                        }}
                      ></div>
                      {r.content === null && (
                        <p>"Aucune description donnée pour l'instant"</p>
                      )}
                    </>
                  )}

                  {r.isHightlight === null && (
                    <>
                      <div className="row">
                        {r.followupReportsIndicators && (
                          <>
                            {r.followupReportsIndicators.map((item, id) => (
                              <div className="row">
                                <div className="col-sm-4">{item.indi.name}</div>
                                <div className="col-sm-8">
                                  {item.indi.description}
                                </div>
                                <div className="col-sm-4">
                                  {item.indi.comment}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{
                          __html: r.content || r.description,
                        }}
                      ></div>
                    </>
                  )}

                  {/* <Editor contentText={r.content}></Editor> */}
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
