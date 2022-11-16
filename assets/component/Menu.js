import React, { useContext, useDebugValue, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/useAuth";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import useLogout from "../hooks/useLogout";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Search from "./Search";
// import AppelsOrganisation from "./Appels-Organisation";

const Menu = () => {
  const logout = useLogout();
  const [auth, setAuth] = useState(useAuth());
  const [antenna, setAntenna] = useState(
    localStorage.getItem("antenna") || false
  );
  console.log(auth);

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  const onChangeAntenne = (e) => {
    // console.log(e);
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
              <Nav.Link href="/patients">Patients</Nav.Link>

              <Nav.Link href="/appels-organisation">
                Appels/Organisation
              </Nav.Link>

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
                    Contacts/Organisation
                  </Dropdown.Item>
                  <Dropdown.Item href="/lieux">Lieux</Dropdown.Item>
                  <Dropdown.Item href="/anniversaire">
                    Anniversaire
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link onClick={signOut}>
                <FontAwesomeIcon icon={faSignOut} />{" "}
              </Nav.Link>
            </Nav>

            <Form.Select
              size="lg"
              onChange={(e) => onChangeAntenne(e)}
              className="select-menu"
              defaultValue={antenna}
            >
              <option>Choissisez l'antenne</option>
              <option value={"Bruxelles"}>Bruxelles</option>
              <option value={"Liège"}>Liège</option>
            </Form.Select>

            <Search></Search>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
