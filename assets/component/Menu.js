import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/useAuth";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../hooks/useLogout";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Search from "./Search";
import Form_AddPatients from "./Form_AddPatient";

const Menu = () => {
  const logout = useLogout();
  const [auth, setAuth] = useState(useAuth());
  const [numberNotification, setNumberNotification] = useState(0);
  const [notificationContent, setNotificationContent] = useState([]);
  const [antenna, setAntenna] = useState(
    localStorage.getItem("antenna") || false
  );

  useEffect(() => {
    setNumberNotification(numberNotification);
    setNotificationContent(notificationContent);
  }, [numberNotification, notificationContent]);
  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  const onChangeAntenne = (e) => {
    //
    localStorage.setItem("antenna", e.target.value);
    location.reload();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        style={{ backgroundColor: "#91bd10" }}
        expand="xxl"
        className="mb-3 menu-metis"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <span className="text-uppercase text-white">Métis</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Form_AddPatients></Form_AddPatients>
              <Nav.Link href="/patients">Profil patients</Nav.Link>

              <Nav.Link href="/appels-organisation">Liste d'appels</Nav.Link>

              <Nav.Link href="/statistiques">Statistiques</Nav.Link>

              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                  }}
                >
                  Administration
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/contactsorganisation">
                    Liste de contacts
                  </Dropdown.Item>
                  <Dropdown.Item href="/lieux">Lieux</Dropdown.Item>
                  <Dropdown.Item href="/anniversaire">
                    Anniversaire
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Nice to have: notification if nobody select the antenna */}
              {/* <Dropdown>
                <Dropdown.Toggle
                  style={{
                    backgroundColor: "transparent",
                    border: "transparent",
                  }}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span className="number-notification">
                    {numberNotification}
                  </span>
                </Dropdown.Toggle>
                {notificationContent.map((notif, id) => (
                  <Dropdown.Menu>{notif}</Dropdown.Menu>
                ))}
              </Dropdown> */}
            </Nav>

            <Form.Select
              size="lg"
              onChange={(e) => onChangeAntenne(e)}
              className="select-menu uk-select"
              defaultValue={antenna}
            >
              <option>Choissisez l'antenne</option>
              <option value={"Bruxelles"}>Bruxelles</option>
              <option value={"Liège"}>Liège</option>
            </Form.Select>

            <Search></Search>
            <Dropdown align={{ xxl: "end" }}>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                Mon profil
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/edit-profile">
                  Editer le profil
                </Dropdown.Item>
                <Dropdown.Item href="/edit-password">
                  Editer le mot de passe
                </Dropdown.Item>
                <Dropdown.Item onClick={signOut}>
                  Déconnexion <FontAwesomeIcon icon={faSignOut} />{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
