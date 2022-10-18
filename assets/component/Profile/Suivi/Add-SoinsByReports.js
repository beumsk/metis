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
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputTypeList from "./Input-Type-List";

function AddSoinsByReport(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
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
  // console.log(contacts);
  //   /api/getContacts
  return (
    <>
      <div className="addSoins-form">
        <Form.Label htmlFor="inputValue">Type</Form.Label>
        <InputTypeList type={type} />
        <Form.Label htmlFor="inputValue">Description</Form.Label>
        <Form.Control
          type="text"
          id="inputValueSpécifique"
          aria-describedby="valueSpécifique"
        />
        <Form.Label htmlFor="inputValue">Contacts</Form.Label>
        <Form.Select size="lg">
          <InputContactList contacts={props.contacts} />
        </Form.Select>
        <Form.Label htmlFor="inputValue">Lieux</Form.Label>

        <InputPlaceList places={props.places}></InputPlaceList>
      </div>
    </>
  );
}

export default AddSoinsByReport;
