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

function InputGoalsList(props) {
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
  const [contactValue, setContactValue] = useState(null);
  useEffect(() => {}, [idPatient]);

  //   /api/getContacts
  const onChangeContact = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <Form.Label htmlFor="inputValue">Contacts</Form.Label>

      <Form.Select
        size="lg"
        value={contactValue}
        onChange={(e) => onChangeContact(e)}
      >
        <option>Choissisez l'objectif</option>
        {props?.goals?.map((el, id) => (
          <>
            {el && el.deletedAt !== null && (
              <option
                value={el?.id}
                // selected={props.defaultValue === el?.id}
              >
                {el?.title} {el?.description}
              </option>
            )}
          </>
        ))}
      </Form.Select>
    </>
  );
}

export default InputGoalsList;
