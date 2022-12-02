import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const TypeCalls = (props) => {
  const [selectTeam, setSelectTeam] = useState(null);
  const [auth, setAuth] = useState(useAuth());

  // const [onChangeType, setOnChangeType] = useState(null);
  const formData = new FormData();
  formData.append("id", 655);

  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "/api/suggestionsById",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     setSelectTeam(response.data);
    //   })
    //   .catch(function (response) {});
  }, []);

  function onChangeType(e) {
    console.log(e);
    props.onChangeTypeCalls(e);
  }

  return (
    <>
      <Form.Label>Type d'appel</Form.Label>
      <InputGroup className="mb-3">
        <Form.Check
          label="En cours"
          type={"checkbox"}
          onClick={(e) => onChangeType("running")}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Check
          label="Fermées"
          type={"checkbox"}
          onClick={(e) => onChangeType("closed")}
        />
      </InputGroup>
    </>
  );
};

export default TypeCalls;
