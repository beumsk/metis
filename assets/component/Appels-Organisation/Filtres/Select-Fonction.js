import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Select from "react-select";
import useAuth from "../../../hooks/useAuth";
import makeAnimated from "react-select/animated";
const SelectFunction = (props) => {
  const [selectFunction, setFunction] = useState(null);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const animatedComponents = makeAnimated();
  const formData = new FormData();
  formData.append("id", 658);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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

  props.onChangeFunction(selectedFunction);
  return (
    <>
      {" "}
      <Form.Label>Fonction</Form.Label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={options}
      />
      {/* <Form.Select
        onChange={(e) => setSelectedFunction(e.target.value)}
        value={selectedFunction}
      >
        <option>Séléctionnez la fonction</option>

        {/* referentList 
        {selectFunction?.map((func) => (
          <option value={func.id}>{func.value}</option>
        ))}
      </Form.Select> */}
    </>
  );
};

export default SelectFunction;
