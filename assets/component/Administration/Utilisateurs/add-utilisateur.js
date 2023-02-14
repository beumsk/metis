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
function ModalAddUtilisateurs(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().idLieux;

  // formData.append("pathString", props.link);
  const [lastname, setLastName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [groups, setGroups] = useState(
    JSON.stringify(["ROLE_ADMIN", "ROLE_USER", "ROLE_BASIC"])
  );
  const [enabled, setEnabled] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error_confirmPassword, setErrorConfirmPassword] = useState(true);

  const [username, setUsername] = useState(null);

  const [infos, setInfos] = useState(null);
  const [isSentRepport, setIsSentRepport] = useState(false);
  const [responseDatas, setResponseDatas] = useState(null);
  const [type, setType] = useState(props?.infosAppels?.sugge?.id);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [idPatient, setIdPatient] = useState(id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (e) => {
    let formGetInfos = new FormData();
    // value-sugg

    formGetInfos.append("lastname", lastname);
    formGetInfos.append("firstname", firstname);
    // formGetInfos.append("idUser", props.user.id);
    formGetInfos.append("email", email);
    formGetInfos.append("groups", groups);
    formGetInfos.append("enabled", enabled);
    formGetInfos.append("username", username);
    formGetInfos.append("password", password);

    axios({
      method: "post",
      url: "/api/addUserAdmin",
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
      <button onClick={handleShow} className="ml-4 btn-metis">
        Ajouter un utilisateur
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Ajouter un utilisateur</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Label htmlFor="inputValue">Nom</Form.Label>
          <input
            type="text"
            className="uk-input"
            onChange={(e) => setLastName(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          {lastname && lastname.length < 3 && (
            <p className="error-danger">Confirmez le nom</p>
          )}
          <Form.Label htmlFor="inputValue">Prénom</Form.Label>
          <input
            type="text"
            className="uk-input"
            onChange={(e) => setFirstName(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          {firstname && firstname.length < 3 && (
            <p className="error-danger">Confirmez le prénom</p>
          )}
          <Form.Label htmlFor="inputValue">e-mail</Form.Label>
          <input
            type="text"
            className="uk-input"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          {email && email.length < 3 && (
            <p className="error-danger">Confirmez l'e-mail'</p>
          )}
          <Form.Label htmlFor="inputValue">username</Form.Label>
          <input
            type="text"
            className="uk-input"
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          <Form.Label htmlFor="inputValue">Mot de passe</Form.Label>
          <input
            type="password"
            className="uk-input"
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          {password && (!/[A-Z]/.test(password) || !/.{8,}/.test(password)) && (
            <p className="error-danger">
              {!/[A-Z]/.test(password) && !/.{8,}/.test(password)
                ? "Le nouveau mot de passe doit être composé de minimum 8 charactères et d'une majuscule."
                : !/[A-Z]/.test(password)
                ? "Le nouveau mot de passe doit être composé de minimum une majuscule."
                : "Le nouveau mot de passe doit être composé de minimum 8 charactères."}
            </p>
          )}
          <Form.Label htmlFor="inputValue">
            Confirmez le mot de passe
          </Form.Label>
          <input
            type="password"
            className="uk-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-describedby="valueSpécifique"
          />
          {password !== confirmPassword && (
            <p className="error-danger">Veuillez retaper le mot de passe</p>
          )}
          {confirmPassword &&
            (!/[A-Z]/.test(confirmPassword) ||
              !/.{8,}/.test(confirmPassword)) && (
              <p className="error-danger">
                {!/[A-Z]/.test(confirmPassword) &&
                !/.{8,}/.test(confirmPassword)
                  ? "Le nouveau mot de passe doit être composé de minimum 8 charactères et d'une majuscule."
                  : !/[A-Z]/.test(confirmPassword)
                  ? "Le nouveau mot de passe doit être composé de minimum une majuscule."
                  : "Le nouveau mot de passe doit être composé de minimum 8 charactères."}
              </p>
            )}
          <Form.Label htmlFor="inputValue">Groups</Form.Label>
          <select
            onChange={(e) => setGroups(e.target.value)}
            className="uk-select"
          >
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
              label="Activé"
              onChange={(e) => setEnabled(e.target.checked)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {isSentRepport && <FontAwesomeIcon icon={faCheck} />}
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

export default ModalAddUtilisateurs;
