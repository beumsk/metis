import React, { useContext, useDebugValue } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Form_MeetRapports = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  return (
    <>
      <h3>Rapport de rencontre</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Tapez le nom" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Tapez le prénom" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Tapez le surnom" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Choissisez votre antenne</option>
          <option value="1">Liège</option>
          <option value="2">Bruxelles</option>
        </Form.Select>

        <Button variant="primary" type="submit" className="btn-metis mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Form_MeetRapports;
