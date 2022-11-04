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

function InputContactList(props) {
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
  //
  return (
    <>
      <Form.Label htmlFor="inputValue">Contacts</Form.Label>

      <Form.Select
        size="lg"
        value={contactValue}
        onChange={(e) => onChangeContact(e)}
      >
        <option>Choissisez le contact</option>
        {props?.contacts?.data?.map((el, id) => (
          <>
            {props?.contacts &&
              props?.contacts?.data &&
              el?.orga !== null &&
              el.deletedAt !== null && (
                <option
                  value={el?.orga?.id}
                  selected={
                    props.defaultValue === el?.orga?.id
                      ? props.defaultValue
                      : ""
                  }
                >
                  {el?.firstname} {el?.lastname}
                </option>
              )}
          </>
        ))}
      </Form.Select>
    </>
  );
}

export default InputContactList;
