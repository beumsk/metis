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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/suggestionsById",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setType(response);
    //   })
    //   .catch(function (response) {});
    // axios({
    //   method: "post",
    //   url: "/api/getContacts",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     setContacts(response);
    //   })
    //   .catch(function (response) {});
  }, [idPatient]);
  //
  //   /api/getContacts
  return (
    <>
      <div className="container  row mx-auto report-content">
        <h5 className="mt-4 mb-4">Tous les rapports</h5>

        {props.informationPatient &&
          props.informationPatient.data &&
          props.informationPatient.data.length > 0 && (
            <Table striped>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Date de création</th>
                  <th>Objectifs</th>
                  <th>Contact(s)</th>
                  <th>Soins(s)</th>
                  <th>Activité(s)</th>
                  <th>Important</th>
                  <th>Ind.</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {props.informationPatient.data.map((patient) => (
                <>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        {new Date(patient.creationDate).toLocaleDateString()}
                      </td>
                      <td></td>
                      <td></td>
                      <td>{patient.noCare}</td>
                      <td>{patient.noIndicators}</td>
                      <td>{patient.noIndicators}</td>
                      <td></td>
                      <td>
                        {" "}
                        <span>
                          <button>Détails</button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
              {/* <button className="btn-metis" onClick={readMore}>
                Read More
              </button> */}
            </Table>
          )}
      </div>
    </>
  );
}

// render(<Modal />);

export default DashboardReports;
