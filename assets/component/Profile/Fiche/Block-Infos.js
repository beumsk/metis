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
import ModalItemFiche from "./ModalItemFiche";

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

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/patientsInformationByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setInformation(response.data);
      })
      .catch(function (response) {});
  }, [idPatient]);
  console.log("infos", informationPatient);
  return (
    <>
      {informationPatient?.map((patient, id) => (
        <>
          {patient && patient.suge?.pathString === props.link && (
            <div className="row">
              <div className="col-sm-4">
                <p>{patient.suge?.value}</p>
              </div>
              <div className="col-sm-4">
                {patient?.patientInformation?.map((pi, id) => (
                  <p>{pi.sugg?.value}</p>
                ))}
              </div>
              <div className="col-sm-4">
                <ModalItemFiche link={props.link} />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default BlockInfos;
