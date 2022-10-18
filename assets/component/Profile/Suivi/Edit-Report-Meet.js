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
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
function EditReportMeet(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [showAccesSoins, setAccesSoins] = useState(false);
  const [showActivities, setActivities] = useState(false);
  const [showIndicateurs, setChoiceIndicateurs] = useState(false);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [places, setPlaces] = useState(null);
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
  }, [idPatient]);

  const choiceActivities = (e) => {
    // console.log(e);
    setActivities(e);
  };
  const choiceSoins = (e) => {
    setAccesSoins(e);
  };
  const choiceIndicateurs = (e) => {
    setChoiceIndicateurs(e);
  };

  const validRepport = (e) => {};
  // console.log(props?.informationPatient);
  return (
    <>
      <h4 className="mt-4 mb-4">Editer le rapport</h4>
      {/* <Form.Control type="text" id="inputText" className="mt-4" /> */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des soins ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceSoins(true)}
              name="group1"
              type={"radio"}
              id={`inline-radio-1`}
            />
            <Form.Check
              inline
              label="Non"
              name="group1"
              onClick={(e) => choiceSoins(false)}
              type={"radio"}
              id={`inline-radio-2`}
            />
          </div>
        </div>
        <div>
          {showAccesSoins && (
            <div className="sous-form">
              <AddSoinsByReport
                type={props.type}
                contacts={props.contacts}
                places={props.places}
              ></AddSoinsByReport>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des activitées ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceActivities(true)}
              name="group2"
              type={"radio"}
              id={`inline-radio-3`}
            />
            <Form.Check
              inline
              label="Non"
              name="group2"
              onClick={(e) => choiceActivities(false)}
              type={"radio"}
              id={`inline-radio-4`}
            />
          </div>
        </div>
        <div>
          {showActivities && (
            <div className="sous-form">
              <AddActivitiesByReport
                type={props.type}
                contacts={props.contacts}
                places={props.places}
              ></AddActivitiesByReport>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`}>
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des indicateurs ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceIndicateurs(true)}
              name="group3"
              type={"radio"}
              id={`inline-radio-5`}
            />
            <Form.Check
              inline
              label="Non"
              name="group3"
              onClick={(e) => choiceIndicateurs(false)}
              type={"radio"}
              id={`inline-radio-6`}
            />
          </div>
        </div>
        <div>
          {showIndicateurs && (
            <div className="sous-form">
              <AddIndicateursByReport
                type={type}
                contacts={props.contacts}
                places={props.places}
              ></AddIndicateursByReport>
            </div>
          )}
        </div>
      </Form.Group>

      <Form.Label htmlFor="inputValue">Type de rencontre</Form.Label>
      <Form.Select size="lg">
        <>
          <option>Vu</option>
          <option>Rencontre</option>
          <option>Repos</option>
          <option>Recherche</option>
        </>
      </Form.Select>

      <Form.Label htmlFor="inputValue">Date de la rencontre</Form.Label>
      <Form.Control
        type="date"
        defaultValue={new Date(
          props?.informationPatient?.creationDate
        ).toLocaleDateString()}
        placeholder="Here edit the release date"
        onChange={(e) => handleInputChange(e)}
        id="inputValueSpécifique"
      />

      <Form.Label htmlFor="inputValue">Objectifs</Form.Label>
      <Form.Select size="lg">
        <>
          <option>Objectifs non chargées pour l'instant</option>
        </>
      </Form.Select>

      <InputContactList contacts={props?.contacts} />

      <InputPlaceList places={props?.places}></InputPlaceList>

      <Editor contentText={props?.informationPatient?.content}></Editor>

      <div className="row-btn">
        <button className="btn-metis" onClick={(e) => validRepport(e)}>
          Valider le rapport
        </button>
      </div>
    </>
  );
}

export default EditReportMeet;