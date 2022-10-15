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
  console.log(props);
  return (
    <>
      {props.infos?.map((patient, id) => (
        <>
          {patient && patient.suge?.pathString === props.link && (
            <div className="row">
              <div className="col-sm-4">
                <p>{patient.suge?.value}</p>
              </div>
              <div className="col-sm-4">
                {patient?.patientInformation?.map((pi, id) => (
                  <p key={id}>
                    {pi.sugg?.value}
                    {pi && (
                      <ModalEditInfos
                        link={props.link}
                        infosPatient={pi}
                        infos={patient}
                      />
                    )}
                  </p>
                ))}
              </div>
              <div className="col-sm-4">
                <ModalAddInfos link={props.link} infos={patient} />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default BlockInfos;
