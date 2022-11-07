import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import TableAllRapports from "./Table-AllRapports/Table";
function DashboardReports(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [informations, setInformation] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //
  // console.log(...props.informationPatient.data);
  //   /api/getContacts
  return (
    <>
      <div className="container ">
        <h5 className="mt-4 mb-4">Tous les rapports</h5>

        {props.informationPatient &&
          props.informationPatient.data &&
          props.informationPatient.data.length > 0 && (
            <TableAllRapports
              data={[...props.informationPatient.data]}
              rowsPerPage={10}
            />
          )}
      </div>
    </>
  );
}

// render(<Modal />);

export default DashboardReports;
