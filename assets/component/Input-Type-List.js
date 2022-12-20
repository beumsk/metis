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

function InputTypeList(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 159);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {}, [idPatient]);
  //
  //   /api/getContacts
  const onChangeType = (e) => {
    props.onChangeType(e.target.value);
  };

  return (
    <>
      <select
        size="lg"
        value={typeValue}
        className="uk-select"
        defaultValue={props.defaultValue}
        onChange={(e) => onChangeType(e)}
      >
        {/* <option>Choissisez le tags</option> */}
        {props?.type?.data?.map((el, id) => (
          <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
        ))}
      </select>
    </>
  );
}

export default InputTypeList;
