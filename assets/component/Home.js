import React, { useContext, useDebugValue } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Form_MeetRapports from "./Form_MeetRapports";
const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  return (
    <div className="container-home row m-0">
      <div className="col-sm-6 d-flex align-items-center justify-content-center">
        <div>
          {/* <h1>Choissisez ce que vous avez besoin</h1> */}
          {/* <p>You are logged in!</p> */}
        </div>
      </div>

      <div className="col-sm-6 d-flex align-items-center justify-content-center">
        <Form_MeetRapports></Form_MeetRapports>
      </div>
      {/* <div className="flexGrow">
        <Button onClick={signOut} variant="outline-success">
          Logout
        </Button>
      </div> */}
    </div>
  );
};

export default Home;
