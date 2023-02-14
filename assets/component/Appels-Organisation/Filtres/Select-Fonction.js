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
  let options = [];
  let selectOptions = [];
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
        setFunction(response.data);
      })
      .catch(function (response) {});
  }, []);

  if (selectFunction) {
    for (let index = 0; index < selectFunction.length; index++) {
      const element = selectFunction[index];
      options.push({ value: element.id, label: element.value });
    }
  }

  const onChangeTags = (e) => {
    // options.filter(e => e.value);
    let optionsValues = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index];
      optionsValues.push(element.value);
    }
    // e.filter((f) => [f.value]);
    props.onChangeFunction(optionsValues);
    //
    //
  };

  return (
    <>
      <Form.Label>Fonction</Form.Label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(e) => onChangeTags(e)}
        placeholder="Sélectionner..."
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        styles={{
          menu: (base) => ({ ...base, color: "var(--bs-body-color)" }),
        }}
        options={options}
      />
      {/* <Form.Select
        onChange={(e) => setSelectedFunction(e.target.value)}
        value={selectedFunction}
      >
        <option>Sélectionnez la fonction</option>

        {/* referentList 
        {selectFunction?.map((func) => (
          <option value={func.id}>{func.value}</option>
        ))}
      </Form.Select> */}
    </>
  );
};

export default SelectFunction;
