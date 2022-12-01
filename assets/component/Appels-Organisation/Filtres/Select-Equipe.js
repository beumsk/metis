import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const SelectTeam = () => {
  const [selectTeam, setSelectTeam] = useState(null);
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
  return (
    <>
      <Form.Label>Equipe</Form.Label>
      <Form.Select>
        <option>Séléctionnez l'équipe</option>

        {/* referentList */}
        {selectTeam?.map((team) => (
          <option>{team.value}</option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectTeam;
