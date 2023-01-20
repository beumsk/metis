import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

function FilterRapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  var reportData = new FormData();
  reportData.append("id", id.toString());
  reportData.append("number", 10);
  const [filterTextContentRapport, setFilterTextContentRapport] =
    useState(null);
  const [filterDateContentRapport, setFilterDateContentRapport] =
    useState(null);

  const [filterTypeOfReports, setTypeOfRepports] = useState(null);

  const [informations, setInformations] = useState(null);
  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  const [isSentGoals, setSentGoals] = useState(false);
  const [isSentRepport, setSentRepport] = useState(false);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);

  const onChangeRapportFilter = (e) => {
    e.preventDefault();

    if (filterTextContentRapport) {
      reportData.append("setTextRapport", filterTextContentRapport);
    }
    if (filterTypeOfReports) {
      reportData.append("setTypeRapport", filterTypeOfReports);
    }
    if (filterDateContentRapport) {
      reportData.append("setDateRapport", filterDateContentRapport);
    }

    axios({
      method: "post",
      url: "/api/getFollowUpReportsById",
      data: reportData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        props.onChangeFilter(response);
        setInformations(response);
      })
      .catch(function (response) {});
  };
  return (
    <form>
      <div className="search-textRapport row">
        <div className="col-sm-4">
          <label className="uk-form-label">Description de rapport</label>
          <input
            type="text"
            className="uk-input"
            defaultValue={filterTextContentRapport}
            onChange={(e) => setFilterTextContentRapport(e.target.value)}
          />
        </div>
        <div className="search-textRapport col-sm-4">
          <label className="uk-form-label">Type de rapport</label>
          <Form.Select
            defaultValue={filterTypeOfReports}
            className="uk-select"
            onChange={(e) => setTypeOfRepports(e.target.value)}
          >
            <option value="">Choisissez le type de rapport</option>
            <option value={1}>Rapport de rencontre</option>
            <option value={3}>Rapport de réunion</option>
            <option value={4}>Appel entrant</option>
            <option value={2}>Appel sortant</option>
          </Form.Select>
        </div>
        <div className="search-textRapport col-sm-4">
          <label className="uk-form-label">Rechercher par date</label>
          <input
            type="date"
            className="uk-select"
            defaultValue={filterDateContentRapport}
            onChange={(e) => setFilterDateContentRapport(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button
              onClick={(e) => onChangeRapportFilter(e)}
              className="uk-button uk-button-default mt-4"
              type="submit"
            >
              Filtrer
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FilterRapportDetails;
