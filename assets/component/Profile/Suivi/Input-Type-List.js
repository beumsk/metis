import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";

function InputTypeList(props) {
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
  const [typeValue, setTypeValue] = useState(null);
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
  }, [idPatient]);
  //

  //   /api/getContacts
  const onChangeType = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <Form.Select
        size="lg"
        value={typeValue}
        className="uk-select"
        required={true}
        onChange={(e) => onChangeType(e)}
        defaultValue={props?.defaultValue}
      >
        <option>Choisissez le type</option>
        {props?.type?.data?.map((el, id) => (
          <>{el.value && <option value={el?.id}>{el?.value}{el?.value === "Autre" && "*"}</option>}</>
        ))}
      </Form.Select>
    </>
  );
}

export default InputTypeList;
