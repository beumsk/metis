import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const SelectTeam = (props) => {
  const [selectTeam, setSelectTeam] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const formData = new FormData();
  formData.append("id", 655);

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
        setSelectTeam(response.data);
      })
      .catch(function (response) {});
  }, []);

  props.onChangeTeam(selectedTeam);
  return (
    <>
      <Form.Label>Equipe</Form.Label>
      <Form.Select
        onChange={(e) => setSelectedTeam(e.target.value)}
        value={selectedTeam}
        className="uk-select"
      >
        <option value={null}>Séléctionnez l'équipe</option>

        {/* referentList */}
        {selectTeam?.map((team) => (
          <option value={team.value}>{team.value}</option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectTeam;
