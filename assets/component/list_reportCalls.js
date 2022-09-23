import React, { useContext, useDebugValue } from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Menu from "./Menu";
import Form_MeetRapports from "./Form_MeetRapports";
import { Routes, Route } from "react-router-dom";

const RepportCalls = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/connect");
  };

  return (
    <>
      <p>Repports Calls</p>
    </>
  );
};

export default RepportCalls;
