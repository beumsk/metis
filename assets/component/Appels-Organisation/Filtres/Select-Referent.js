import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const SelectReferent = (props) => {
  const [referentList, setReferentList] = useState(null);
  const [auth, setAuth] = useState(useAuth());
  const [refSelected, setReferentSelected] = useState(null);
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
  props.onClickReferent(refSelected);
  return (
    <>
      {" "}
      <Form.Label>Referent</Form.Label>
      <Form.Select
        onChange={(e) => setReferentSelected(e.target.value)}
        value={refSelected}
        className="uk-select"
      >
        <option>Séléctionnez le référent</option>

        {/* referentList */}
        {referentList?.map((referent) => (
          <option value={referent.id}>
            {referent.firstName} {referent.lastName}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectReferent;
