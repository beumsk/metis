import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ModalAddInfos from "./Modal-Add-Infos";
import moment from "moment";
import ModalEditInfos from "./Modal-Edit-Infos";
import ModalDeleteInfos from "./Modal-Delete-Infos";

const BlockInfos = (props) => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const location = useLocation();
  var formData = new FormData();
  formData.append("id", id.toString());

  const [informationPatient, setInformation] = useState(null);
  const [informationTemplateBlock, setInformationTemplateBlock] =
    useState(null);

  function onChangeEditPatientInformation(e) {
    if (e && e.response) {
      props.onChangeEditPati(e);
    }
  }
  function onChangePatientInformation(e) {
    props.onChangeAddPati(e);

    // props.onChangeAddPati(e.response);
  }

  return (
    <>
      {props.infos?.map((patient, id) => (
        <div key={patient.id}>
          {patient && patient.suge?.pathString === props.link && (
            <div className="row row-infos" key={patient.id}>
              <div className="col-sm-3">
                <p style={{ fontWeight: "600" }}>{patient.suge?.value}</p>
              </div>

              <div className="col-sm-7">
                {patient?.patientInformation && (
                  <>
                    {patient?.patientInformation?.map((pi, id) => (
                      <div className="row pb-2" key={pi.id}>
                        <div className="col-sm-6">
                          <div
                            key={pi.id}
                            style={{
                              color: "rgb(145, 189, 16)",
                              fontWeight: "500",
                              fontSize: "0.8rem",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {pi.sugg?.value && patient.suggestionsByBlock ? (
                              <>{pi.sugg?.value}</>
                            ) : (
                              <>
                                {pi?.value &&
                                patient.suggestionsByBlock &&
                                patient.suggestionsByBlock.length === 0 ? (
                                  <>{pi.value}</>
                                ) : (
                                  <> Pas d'informations </>
                                )}
                              </>
                            )}

                            <div className="group-buttons">
                              <ModalEditInfos
                                link={props.link}
                                infosPatient={pi}
                                infos={patient}
                                onChange={onChangePatientInformation}
                              />
                              <ModalDeleteInfos
                                link={props.link}
                                infosPatient={pi}
                                infos={patient}
                                onChange={onChangePatientInformation}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          {pi && (
                            <>
                              <p>
                                {pi?.start !== null &&
                                  moment(pi?.start)
                                    .utc("UTC+01:00")
                                    .format("DD-MM-YYYY")}
                                {" - "}
                                {pi?.end !== null &&
                                  moment(pi?.end)
                                    .utc("UTC+01:00")
                                    .format("DD-MM-YYYY")}
                              </p>
                              <p>
                                {" "}
                                {patient.suggestionsByBlock.length === 0
                                  ? ""
                                  : pi?.value}
                              </p>
                            </>
                          )}
                          <p>{pi?.comment}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="col-sm-2">
                <ModalAddInfos
                  link={props.link}
                  infos={patient}
                  onChange={onChangePatientInformation}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default BlockInfos;
