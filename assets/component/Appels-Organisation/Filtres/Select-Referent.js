import React, { useContext, useDebugValue, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
const SelectReferent = () => {
  const [referentList, setReferentList] = useState(null);
  const [auth, setAuth] = useState(useAuth());
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
  return (
    <>
      {" "}
      <Form.Label>Referent</Form.Label>
      <Form.Select>
        <option>Séléctionnez le référent</option>

        {/* referentList */}
        {referentList?.map((referent) => (
          <option>
            {referent.firstName} {referent.lastName}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectReferent;
