import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const SelectFunction = () => {
  const [selectFunction, setFunction] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const formData = new FormData();
  formData.append("id", 57);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setFunction(response.data);
      })
      .catch(function (response) {});
  }, []);
  return (
    <>
      {" "}
      <Form.Label>Fonction</Form.Label>
      <Form.Select>
        <option>Séléctionnez la fonction</option>

        {/* referentList */}
        {selectFunction?.map((func) => (
          <option>{func.value}</option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectFunction;
