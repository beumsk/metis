import React, { useContext, useDebugValue, useState } from "react";
import Form from "react-bootstrap/Form";
const SelectLimitHistoric = (props) => {
  const [dateHistoric, setDateHistoric] = useState(null);

  props.onChangeLimitHistoric(dateHistoric);
  return (
    <>
      {" "}
      <Form.Label>Limite historique</Form.Label>
      <Form.Control
        type="date"
        placeholder="Normal text"
        className="uk-select"
        onChange={(e) => setDateHistoric(e.target.value)}
      />
    </>
  );
};

export default SelectLimitHistoric;
