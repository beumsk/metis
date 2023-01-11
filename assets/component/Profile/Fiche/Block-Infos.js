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
      props.onChangeEditPati(e.response);
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
            <div className="row row-infos">
              <div className="col-sm-3">
                <p style={{ fontWeight: "600" }}>{patient.suge?.value}</p>
              </div>

              <div className="col-sm-7">
                {patient?.patientInformation && (
                  <>
                    {patient?.patientInformation?.map((pi, id) => (
                      <div className="row" key={pi.id}>
                        <div className="col-sm-6">
                          <p
                            key={pi.id}
                            style={{
                              color: "rgb(145, 189, 16)",
                              fontWeight: "500",
                            }}
                          >
                            {pi.sugg?.value ? (
                              <>{pi.sugg?.value}</>
                            ) : (
                              <> Pas d'informations </>
                            )}

                            <ModalEditInfos
                              link={props.link}
                              infosPatient={pi}
                              infos={patient}
                              onChange={(e) =>
                                onChangeEditPatientInformation(e)
                              }
                            />
                            <ModalDeleteInfos
                              link={props.link}
                              infosPatient={pi}
                              infos={patient}
                              onChange={(e) =>
                                onChangeEditPatientInformation(e)
                              }
                            />
                          </p>
                        </div>

                        <div className="col-sm-6">
                          {pi && (
                            <p>
                              {pi?.value}{" "}
                              {pi?.start !== null &&
                                new Date(pi?.start).toLocaleDateString()}{" "}
                              {pi?.end !== null &&
                                new Date(pi?.end).toLocaleDateString()}
                            </p>
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
