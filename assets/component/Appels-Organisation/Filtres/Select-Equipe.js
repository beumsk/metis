import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAuth from "../../../hooks/useAuth";
const SelectTeam = (props) => {
  const [selectTeam, setSelectTeam] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const animatedComponents = makeAnimated();
  const formData = new FormData();
  formData.append("id", 655);
  let options = [];
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
        setSelectTeam(response.data);
      })
      .catch(function (response) {});
  }, []);

  if (selectTeam) {
    for (let index = 0; index < selectTeam.length; index++) {
      const element = selectTeam[index];
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
    props.onChangeTeam(optionsValues);
    //
    //
  };

  return (
    <>
      <Form.Label>Équipe</Form.Label>
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

      {/* <Form.Label>Équipe</Form.Label>
      <Form.Select
        onChange={(e) => setSelectedTeam(e.target.value)}
        value={selectedTeam}
        className="uk-select"
      >
        <option value={null}>Sélectionnez l'équipe</option>

      
        {selectTeam?.map((team) => (
          <option value={team.value}>{team.value}</option>
        ))}
      </Form.Select> */}
    </>
  );
};

export default SelectTeam;
