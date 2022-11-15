import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Editor from "./Editor-Reports";
import Form from "react-bootstrap/Form";
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
      url: "/api/getFollowUpReportsWithAnswers",
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
  return (
    <>
      {informations && informations.data && informations.data.length > 0 && (
        <>
          {informations.data.map((r, id) => (
            <div key={id} className="report-content">
              {r && r.type === 1 && <h6>Appel Sortant</h6>}
              {r && r.type === 2 && <h6>Appel Entrant</h6>}
              {r && r.deletedAt === null && (
                <>
                  <Form.Check
                    type="switch"
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
                  {r.isHightlight === true && (
                    <EditReportMeet
                      informationPatient={r}
                      type={type}
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
      )}
    </>
  );
}

// render(<Modal />);

export default RapportDetails;
