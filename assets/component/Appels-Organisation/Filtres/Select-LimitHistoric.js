import React, { useContext, useDebugValue, useState } from "react";
import Form from "react-bootstrap/Form";
import moment from "moment";
const SelectLimitHistoric = (props) => {
  const [dateHistoric, setDateHistoric] = useState(null);

  moment().subtract(1, "months");

  props.onChangeLimitHistoric(dateHistoric);
  // 2023-01-26
  return (
    <>
      {" "}
      <Form.Label>Limite historique</Form.Label>
      <Form.Control
        type="date"
        placeholder="Normal text"
        className="uk-select"
        defaultValue={moment().subtract(1, "months").format("YYYY-MM-DD")}
        onChange={(e) => setDateHistoric(e.target.value)}
      />
    </>
  );
};

export default SelectLimitHistoric;
