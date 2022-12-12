import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Indicateurs-Form-AddReports/Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
import InputGoalsList from "./Input-Goals-List";

function FilterRapportDetails(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  var reportData = new FormData();
  reportData.append("id", id.toString());
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
    if (filterTextContentRapport) {
      reportData.append("setTextRapport", filterTextContentRapport);
    }

    if (filterTypeOfReports) {
      reportData.append("setTypeRapport", filterTypeOfReports);
    }

    if (filterDateContentRapport) {
      reportData.append(
        "setDateRapport",
        new Date(filterDateContentRapport).toISOString()
      );
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
    <>
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
            <option>Choissisez le type de rapport</option>
            <option value={1}>Rapport de rencontre</option>
            <option value={4}>Appel entrant</option>
            <option value={2}>Appel sortant</option>
          </Form.Select>
        </div>
        <div className="search-textRapport col-sm-4">
          <label className="uk-form-label">Rechercher part date</label>
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
            >
              Filtrer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterRapportDetails;
