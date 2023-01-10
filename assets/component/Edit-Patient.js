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
      <Button onClick={handleShow} className={"editIconPatient"}>
        {" "}
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Modifier une information</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addSoins-form">
            <div class="form-group">
              <label class="control-label" for="patient_names_firstName">
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
            <div class="form-group">
              <label class="control-label" for="patient_names_lastName">
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
            <div class="form-group">
              <label class="control-label" for="patient_names_nickNames">
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

            <div class="form-group">
              <label class="control-label" for="patient_others_birthdate">
                Date de naissance
              </label>
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
                </span>
                <input
                  type="date"
                  id="patient_others_birthdate"
                  name="patient_others[birthdate]"
                  className="uk-input"
                  onChange={(e) => setBirthDate(e.target.value)}
                  defaultValue={
                    props?.patient?.birthdate
                      ? new Date(props?.patient?.birthdate)
                          .toISOString()
                          .substring(0, 10)
                      : null
                  }
                />
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <label for="patient_others_unknownYear">
                  <input
                    type="checkbox"
                    id="patient_others_unknownYear"
                    name="patient_others[unknownYear]"
                    onChange={(e) => setUnknownYear(e.target.checked)}
                    defaultChecked={
                      props?.patient?.unknownYear === 0 ? true : false
                    }
                  />
                  Année inconnue/non garantie
                </label>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="patient_others_birthLocation">
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
            <div class="form-group">
              <label
                class="control-label"
                for="patient_others_firstContactDate"
              >
                Date de premier contact
              </label>
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
                </span>
                <input
                  type="date"
                  id="patient_others_firstContactDate"
                  onChange={(e) => setFirstContactDate(e.target.value)}
                  name="patient_others[firstContactDate]"
                  className="uk-input"
                  defaultValue={
                    props?.patient?.firstContactDate
                      ? new Date(props?.patient?.firstContactDate)
                          .toISOString()
                          .substring(0, 10)
                      : null
                  }
                />
              </div>
            </div>

            <button onClick={(e) => sentRapport(e)}>Envoyer</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditPatient;
