import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faPlus,
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
  formData.append("id", 108);
  const [idEditFormSoins, setIdEditFormSoins] = useState([]);
  const [value, setValueTypeForm] = useState();
  const [contact, setValueContactForm] = useState();
  const [place, setValuePlaceForm] = useState();
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState();

  const [description, setValueDescription] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let ObjForm = {};

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

  return (
    <>
      <Button onClick={handleShow}>
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter un soin</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addSoins-form" id={props.id}>
            <Form.Label htmlFor="inputValue" className="uk-form-label">
              Type
            </Form.Label>

            <select
              size="lg"
              className="uk-select"
              required={true}
              onChange={(e) => handleChangeType(e)}
            >
              <option>Choissisez le type</option>
              {type?.data?.map((el, id) => (
                <>{el.value && <option value={el?.id}>{el?.value}</option>}</>
              ))}
            </select>

            <Form.Label htmlFor="inputValue" className="uk-form-label">
              Description
            </Form.Label>
            <Form.Control
              type="text"
              id="inputValueSpécifique"
              className="uk-input"
              aria-describedby="valueSpécifique"
            />

            <InputContactList></InputContactList>

            <InputPlaceList></InputPlaceList>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddSoinsByReport;
