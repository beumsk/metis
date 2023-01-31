import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const SelectReferent = (props) => {
  const [referentList, setReferentList] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const animatedComponents = makeAnimated();
  const [refSelected, setReferentSelected] = useState(null);
  let options = [];
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/findReferents",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    }).then(function (response) {
      setReferentList(response.data);
    });
  }, []);

  if (referentList) {
    for (let index = 0; index < referentList.length; index++) {
      const element = referentList[index];
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
    console.log(optionsValues);
    props.onClickReferent(optionsValues);
    //
    //
  };
  return (
    <>
      {" "}
      <Form.Label>Referent</Form.Label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(e) => onChangeTags(e)}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        styles={{
          menu: (base) => ({ ...base, color: "var(--bs-body-color)" }),
        }}
        options={options}
      />
      {/* <Form.Select
        onChange={(e) => setReferentSelected(e.target.value)}
        value={refSelected}
        className="uk-select"
      >
        <option>Séléctionnez le référent</option>

      
        {referentList?.map((referent) => (
          <option value={referent.id}>
            {referent.firstName} {referent.lastName}
          </option>
        ))}
      </Form.Select> */}
    </>
  );
};

export default SelectReferent;
