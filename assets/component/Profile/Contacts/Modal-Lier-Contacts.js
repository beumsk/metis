import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputContactList from "../../Input-Contact-List";
import InputTypeList from "../Suivi/Input-Type-List";
function ModalLierContacts(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [contacts, setContacts] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [responseDatas, setResponseDatas] = useState(null);
  const [idPatient, setIdPatient] = useState(id);
  const [description, setDescription] = useState(null);
  const [commentaire, setCommentaire] = useState(null);
  const [contactItemList, setContactItemList] = useState(null);
  const [start, setStartDate] = useState(null);
  const [end, setEndDate] = useState(null);
  const [typeItemList, setTypeItemList] = useState();
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
  //
  //   /api/getContacts

  function handleSave() {
    let formData = new FormData();
    // value-sugg

    formData.append("description", description);
    formData.append("commentaire", commentaire);
    formData.append(
      "contactItemList",
      contactItemList && contactItemList.length > 0
        ? contactItemList[0].id
        : null
    );
    formData.append("start", start);
    formData.append("end", end);
    formData.append("typeItemList", typeItemList);
    formData.append("idPatient", idPatient);
    axios({
      method: "post",
      url: "/api/setPatientContact",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      if (response) {
        props.onChangeUpdateContact(true);
        setShow(false);
        // setIsSentRepport(true);
      }
    });
  }

  function onChangeContacts(e) {
    setContactItemList(e);
  }

  function handleChangeType(e) {
    setTypeItemList(e[0]?.id);
  }

  return (
    <>
      <Button onClick={handleShow} className="btn-metis">
        Lier un contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lier un contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <InputContactList
              defaultValue={null}
              onChange={onChangeContacts}
              data={props?.contacts?.data}
              multiple={false}
              id="single"
              label="Contacts"
            ></InputContactList>

            <InputTypeList
              data={props?.type?.data}
              // contacts={props?.contacts}
              onChange={handleChangeType}
              defaultValue={null}
              multiple={false}
              id="single"
              label="Type"
            ></InputTypeList>
            <Form.Label htmlFor="inputValue">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="uk-textarea"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Form.Label htmlFor="inputValue">Début</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setStartDate(new Date(e.target.value).toJSON().slice(0, 10));
              }}
              className="uk-select"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
            <Form.Label htmlFor="inputValue">Fin</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setEndDate(new Date(e.target.value).toJSON().slice(0, 10));
              }}
              className="uk-select"
              id="inputValueSpécifique"
              aria-describedby="valueSpécifique"
            />
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fermer sans enregistrer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalLierContacts;
