import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Search = () => {
  let [valueSearch, setSearch] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  let [resultSearch, setResultSearch] = useState(null);
  let [isOpen, setOpenResult] = useState(false);

  const setValue = (e) => {
    // e.defaultPrevented();
    //
    setSearch(e.target.value);
    // posts.filter((e) => e.name === valueSearch);
    //
    if (valueSearch && valueSearch?.length > 1) {
      setOpenResult(true);
      axios({
        method: "post",
        url: "/api/getSearch",
        params: { val: valueSearch.toString(), antenna: auth.antenna },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          //handle success
          // setPatientsList(response);
          setResultSearch(response.data);
          //
          setSearch(e.target.value);
        })
        .catch(function (response) {
          //
        });
    } else {
      setOpenResult(false);
    }
  };

  const onClickIfValue = (e) => {
    if (resultSearch?.length > 0) {
      setOpenResult(true);
    }
  };
  // const onBlursetValue = (e) => {
  //   const currentTarget = e.currentTarget;

  //   // Check the newly focused element in the next tick of the event loop
  //   setTimeout(() => {
  //     // Check if the new activeElement is a child of the original container
  //     if (!currentTarget.contains(document.activeElement)) {
  //       // You can invoke a callback or add custom logic here
  //       setOpenResult(false);
  //     }
  //   }, 0);
  // };

  const redirectionToPatient = (id) => {
    if (id) {
      return (window.location.href = "/" + id);
    }
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        // onBlur={onBlursetValue}
        onClick={(e) => onClickIfValue()}
        aria-label="Search"
        onChange={setValue}
      />
      {isOpen}
      {resultSearch && isOpen && (
        <div className="result-search">
          <ul>
            {resultSearch?.map((result) => (
              <li
                key={result.id}
                onClick={(e) => redirectionToPatient(result.id)}
                className="link-toPatient"
              >
                <div>
                  {result.lastname} {result.firstname} {result?.nicknames}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default Search;
