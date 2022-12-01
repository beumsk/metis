import React, { useContext, useDebugValue } from "react";
import Form from "react-bootstrap/Form";
const SelectLimitHistoric = () => {
  return (
    <>
      {" "}
      <Form.Label>Limite historique</Form.Label>
      <Form.Control type="date" placeholder="Normal text" />
    </>
  );
};

export default SelectLimitHistoric;
