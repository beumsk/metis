import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
const Search = () => {
  let [valueSearch, setSearch] = useState(null);

  const posts = [
    { id: "1", name: "This first post is about React" },
    { id: "2", name: "This next post is about Preact" },
    { id: "3", name: "We have yet another React post!" },
    { id: "4", name: "This is the fourth and final post" },
  ];

  const setValue = (e) => {
    setSearch(e);
    posts.filter((e) => e.name === valueSearch);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};

export default Search;
