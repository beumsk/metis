import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faPlusCircle,
  faCancel,
  faEdit,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
function ModalEditUtilisateurs(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idLieux;

  // formData.append("pathString", props.link);
  const [lastname, setLastName] = useState(
    props.user.lastname !== null ? props.user.lastname : null
  );
  const [firstname, setFirstName] = useState(
    props.user.firstname !== null ? props.user.firstname : null
  );
  const [email, setEmail] = useState(
    props.user.email !== null ? props.user.email : null
  );
  const [groups, setGroups] = useState(
    props.user.roles !== null ? JSON.stringify(props.user.roles) : null
  );
  const [enabled, setEnabled] = useState(
    props.user.enabled !== null ? props.user.enabled : null
  );

  const [username, setUsername] = useState(
    props.user.username !== null ? props.user.username : null
  );

  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [type, setType] = useState(props?.infosAppels?.sugge?.id);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const [specificValueInput, setSpecificValueInput] = useState(
    props?.infosAppels?.valueInformations !== null
      ? props?.infosAppels?.valueInformations
      : null
  );

  const [commentaireInput, setCommentaire] = useState(
    props?.infosAppels?.valueDescription !== null
      ? props?.infosAppels?.valueDescription
      : null
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg
    console.log(groups);
    formGetInfos.append("lastname", lastname);
    formGetInfos.append("firstname", firstname);
    formGetInfos.append("idUser", props.user.id);
    formGetInfos.append("email", email);
    formGetInfos.append("groups", groups);
    formGetInfos.append("enabled", enabled);
    formGetInfos.append("username", username);

    axios({
      method: "post",
      url: "/api/editUserAdmin",
      data: formGetInfos,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      //   var formData = new FormData();
      //   formData.append("id", response.data.data.id);

      props.onChange(true);
      setShow(false);
    });
  };

  return (
    <>
      <button onClick={handleShow} className="ml-4">
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Modifier une information</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Label htmlFor="inputValue">Nom</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            className="uk-input"
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={firstname}
            aria-describedby="valueSpécifique"
          />
          <Form.Label htmlFor="inputValue">Prénom</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            className="uk-input"
            defaultValue={lastname}
            onChange={(e) => setFirstName(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          <Form.Label htmlFor="inputValue">e-mail</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            className="uk-input"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          <Form.Label htmlFor="inputValue">username</Form.Label>
          <input
            type="text"
            id="inputValueSpécifique"
            className="uk-input"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          <Form.Label htmlFor="inputValue">Groups</Form.Label>
          <select
            onChange={(e) => setGroups(e.target.value)}
            className="uk-select"
            defaultValue={groups}
          >
            {console.log(groups)}
            <option
              value={JSON.stringify(["ROLE_ADMIN", "ROLE_USER", "ROLE_BASIC"])}
            >
              ROLE_ADMIN, ROLE_USER, ROLE_BASIC
            </option>
            <option value={JSON.stringify(["ROLE_USER", "ROLE_BASIC"])}>
              ROLE_USER, ROLE_BASIC
            </option>
            <option value={JSON.stringify(["ROLE_BASIC"])}>ROLE_BASIC</option>
            <option value={JSON.stringify(["ROLE_USER"])}>ROLE_USER</option>
          </select>
          <Form>
            <Form.Label htmlFor="inputValue">
              Activer/Désactiver l'utilisateur
            </Form.Label>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Activée"
              defaultChecked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
          <Button onClick={handleClose}>Fermer</Button>
          <Button onClick={handleSave} className="btn-metis">
            Sauver
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Modal />);

export default ModalEditUtilisateurs;
