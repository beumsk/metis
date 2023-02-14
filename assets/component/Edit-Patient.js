import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Form from "react-bootstrap/Form";
function EditPatient(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  const [firstname, setFirstname] = useState(
    props?.patient?.firstname ? props?.patient?.firstname : null
  );
  const [lastname, setLastname] = useState(
    props?.patient?.lastname ? props?.patient?.lastname : null
  );
  const [nickname, setNicknames] = useState(
    props?.patient?.nickname ? props?.patient?.nickname : null
  );
  const [birthDate, setBirthDate] = useState(
    props?.patient?.birthDate ? props?.patient?.birthDate : null
  );
  const [unknownYear, setUnknownYear] = useState(
    props?.patient?.unknownYear ? props?.patient?.unknownYear : null
  );
  const [birthlocation, setBirthlocation] = useState(
    props?.patient?.birthlocation ? props?.patient?.birthlocation : null
  );
  const [firstContactDate, setFirstContactDate] = useState(
    props?.patient?.firstContactDate ? props?.patient?.firstContactDate : null
  );

  useEffect(() => {}, []);

  const sentRapport = (e) => {
    // showActivities

    let formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("nickname", nickname);
    formData.append("birthDate", birthDate);
    formData.append("unknownYear", unknownYear);
    formData.append("birthlocation", birthlocation);
    formData.append("firstContactDate", firstContactDate);
    formData.append("patient", props?.patient?.id);

    axios({
      method: "post",
      url: "/api/editProfile",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        // location.replace(window.location.origin + "/" + idPatient);

        props.onChangeEditPatient(true);
        setShow(false);
      })
      .catch(function (response) {});
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier une information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="form-group">
              <label
                className="control-label"
                htmlFor="patient_names_firstName"
              >
                Prénom
              </label>
              <input
                type="text"
                id="patient_names_firstName"
                name="patient_names[firstName]"
                className="uk-input"
                onChange={(e) => setFirstname(e.target.value)}
                defaultValue={props?.patient?.firstname}
              />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="patient_names_lastName">
                Nom
              </label>
              <input
                type="text"
                id="patient_names_lastName"
                name="patient_names[lastName]"
                className="uk-input"
                onChange={(e) => setLastname(e.target.value)}
                defaultValue={props?.patient?.lastname}
              />
            </div>
            <div className="form-group">
              <label
                className="control-label"
                htmlFor="patient_names_nickNames"
              >
                Pseudonyme
              </label>
              <input
                type="text"
                id="patient_names_nickNames"
                name="patient_names[nickNames]"
                className="uk-input"
                onChange={(e) => setNicknames(e.target.value)}
                defaultValue={props?.patient?.nicknames}
              />
            </div>

            <div className="form-group">
              <label
                className="control-label"
                htmlFor="patient_others_birthdate"
              >
                Date de naissance
              </label>
              <div className="input-group">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
                <input
                  type="date"
                  id="patient_others_birthdate"
                  name="patient_others[birthdate]"
                  className="uk-input"
                  onChange={(e) => setBirthDate(e.target.value)}
                  defaultValue={
                    props?.patient?.birthdate
                      ? moment(props?.patient?.birthdate)
                          .utc("UTC+01:00")
                          .format("YYYY-MM-DD")
                      : null
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <div className="checkbox form-check">
                <input
                  type="checkbox"
                  id="patient_others_unknownYear"
                  name="patient_others[unknownYear]"
                  className="uk-checkbox my-3"
                  onChange={(e) => setUnknownYear(e.target.checked)}
                  defaultChecked={
                    props?.patient?.unknownYear === 0 ? true : false
                  }
                />
                <label htmlFor="patient_others_unknownYear">
                  Année inconnue/non garantie
                </label>
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label"
                htmlFor="patient_others_birthLocation"
              >
                Lieu de naissance
              </label>
              <input
                type="text"
                id="patient_others_birthLocation"
                onChange={(e) => setBirthlocation(e.target.value)}
                name="patient_others[birthLocation]"
                defaultValue={props?.patient?.birthLocation}
                className="uk-input"
              />
            </div>
            <div className="form-group">
              <label
                className="control-label"
                htmlFor="patient_others_firstContactDate"
              >
                Date de premier contact
              </label>
              <div className="input-group">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
                <input
                  type="date"
                  id="patient_others_firstContactDate"
                  onChange={(e) => setFirstContactDate(e.target.value)}
                  name="patient_others[firstContactDate]"
                  className="uk-input"
                  defaultValue={
                    props?.patient?.firstContactDate
                      ? moment(props?.patient?.firstContactDate)
                          .utc("UTC+01:00")
                          .format("YYYY-MM-DD")
                      : null
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={(e) => sentRapport(e)} className="btn-metis">
            Envoyer
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPatient;
