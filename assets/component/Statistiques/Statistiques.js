import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../../component/Menu";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Form from "react-bootstrap/Form";

const Statistiques = () => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [resultCsv, setResultCSV] = useState(null);
  const [statValue, setStatsValue] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  let objPatient = {};

  useEffect(() => {}, []);

  function exportCSV() {
    console.log(statValue);
    let request = "/api/statistiques" + statValue;

    axios({
      method: "get",
      url: request,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setResultCSV(response.data);
        if (response.data) {
          jsonToCsv(response.data);
        }
        exportFile();
      })
      .catch(function (response) {});
  }

  function jsonToCsv(items) {
    console.log(items);
    const header = Object.keys(items[0]);

    const headerString = header.join(",");

    const replacer = (key, value) => value ?? "";

    const rowItems = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );

    let csv = [headerString, ...rowItems].join("\r\n");

    console.log(csv);

    if (csv) {
      // document.write(csv);

      var hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf8," + encodeURI(csv);
      hiddenElement.target = "_blank";

      hiddenElement.download = "test.csv";
      hiddenElement.click();
    }
  }

  return (
    <>
      <Menu></Menu>
      Statistiques
      <Form.Select
        size="lg"
        value={statValue}
        onChange={(e) => setStatsValue(e.target.value)}
      >
        <option>Selectionner un stat</option>
        <option value={1}>Stats1</option>
        <option value={2}>Stats2</option>
        <option value={3}>Stats3</option>
        <option value={4}>Liste de personnes décédés sans date mises</option>
        <option value={5}>Lister les patients ayant 2 états simultanés</option>
        <option value={6}>Nombre de status part patients</option>
      </Form.Select>
      <a onClick={exportCSV}>export</a>
    </>
  );
};

export default Statistiques;
