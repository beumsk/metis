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
    onChangeType(true);
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
    //
    //     setSelectTeam(response.data);
    //   })
    //   .catch(function (response) {});
  }, []);

  function onChangeType(e) {
    props.onChangeTypeCalls(e);
  }

  return (
    <>
      <Form.Label>Type d'appel</Form.Label>
      <div className="row">
        <InputGroup>
          <Form.Check
            label="En cours"
            type={"radio"}
            name="flexRadioDefault"
            defaultChecked={true}
            id="flexRadioDefault1"
            onClick={(e) => onChangeType(true)}
          />
        </InputGroup>
        <InputGroup>
          <Form.Check
            label="Fermés"
            type={"radio"}
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={(e) => onChangeType(false)}
          />
        </InputGroup>
      </div>
    </>
  );
};

export default TypeCalls;
