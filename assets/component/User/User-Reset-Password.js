import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import Form from "react-bootstrap/Form";
const EditPassword = () => {
  const [auth, setAuth] = useState(useAuth());
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [responseBack, setResponseBack] = useState(null);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/getUser",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setUserId(response.data.user.id);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch(function (response) {});
  }, []);

  const setFormReset = (e) => {
    var formData = new FormData();
    formData.append("id", userId);
    formData.append("password", passwordNew);
    formData.append("currentPassword", currentPassword);

    axios({
      method: "post",
      url: "/api/editPassword",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setResponseBack(response.data.response);
      })
      .catch(function (response) {});
  };

  return (
    <>
      <Menu></Menu>

      <Form className="container">
        <Form.Group className="my-3" controlId="formBasicEmail">
          <h1 className="py-3" style={{ color: "#212529" }}>
            Éditer le mot de passe
          </h1>

          <div className="container-password">
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Mot de passe actuel"
              className="uk-input"
              required
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <div className="eye-icon">
              <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
            </div>
          </div>
          {responseBack && responseBack !== null && (
            <Form.Control.Feedback type="invalid">
              {responseBack}
            </Form.Control.Feedback>
          )}
          {!currentPassword && (
            <Form.Control.Feedback type="invalid">
              Veuillez entrer votre mot de passe actuel.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="container-password">
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              className="uk-input"
              required
              onChange={(e) => setPasswordNew(e.target.value)}
            />
            <div className="eye-icon">
              <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
            </div>
          </div>
          {!passwordNew && (
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un nouveau mot de passe.
            </Form.Control.Feedback>
          )}
          {passwordNew &&
            (!/[A-Z]/.test(passwordNew) || !/.{8,}/.test(passwordNew)) && (
              <Form.Control.Feedback type="invalid">
                {!/[A-Z]/.test(passwordNew) && !/.{8,}/.test(passwordNew)
                  ? "Le nouveau mot de passe doit être composé de minimum 8 charactères et d'une majuscule."
                  : !/[A-Z]/.test(passwordNew)
                  ? "Le nouveau mot de passe doit être composé de minimum une majuscule."
                  : "Le nouveau mot de passe doit être composé de minimum 8 charactères."}
              </Form.Control.Feedback>
            )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="container-password">
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Répéter le nouveau mot de passe"
              className="uk-input"
              required
              onChange={(e) => setPasswordVerified(e.target.value)}
            />
            <div className="eye-icon">
              <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisiblity} />
            </div>
          </div>
          {!passwordNew && (
            <Form.Control.Feedback type="invalid">
              Veuillez répéter le nouveau mot de passe.
            </Form.Control.Feedback>
          )}
          {passwordNew !== passwordVerified && (
            <Form.Control.Feedback type="invalid">
              Les nouveaux mot de passes doivent être identiques.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button
          variant="primary"
          disabled={
            !passwordNew ||
            !/[A-Z]/.test(passwordNew) ||
            !/.{8,}/.test(passwordNew) ||
            passwordNew !== passwordVerified ||
            !passwordVerified ||
            !currentPassword
          }
          onClick={(e) => setFormReset(e)}
          className="btn-metis mt-3"
        >
          Sauver
        </Button>
      </Form>
    </>
  );
};

export default EditPassword;
