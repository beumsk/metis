import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  const [informations, setInformations] = useState();
  const [informationsLogement, setInformationsLogement] = useState();
  const [informationsDeces, setInformationsDeces] = useState();
  const [optionsCVC, setOptionsCVC] = useState();
  const [optionsLogement, setOptionsLogement] = useState();
  const [optionsDeces, setOptionsDeces] = useState();
  const [filterDates, setFilterDates] = useState();
  const [filterDatesLogement, setFilterDatesLogement] = useState();
  const [filterDatesDeces, setFilterDatesDeces] = useState();
  const [indicateurCVCShow, setIndicateurCVCShow] = useState(true);
  const [indicateurLogementShow, setIndicateurLogementShow] = useState(false);
  const [indicateurDecesShow, setIndicateurDecesShow] = useState(false);
  // const [informationsDeces, setInformationsDeces] = useState();
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getFollowUpReportsIndicators",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        let com = response.data.filter((e) => e.indi.name === "Comportement");
        let vet = response.data.filter((e) => e.indi.name === "Vêtements");
        let cor = response.data.filter((e) => e.indi.name === "Corps");

        let arrDates = [];
        response.data.forEach((element) => {
          let dateformated = new Date(element.fore.reportDate).toLocaleString(
            "fr-BE",
            {
              dateStyle: "short",
            }
          );
          arrDates.push(dateformated);
        });
        let filterDates = arrDates.filter(function (value, index, array) {
          return array.indexOf(value) === index;
        });

        setFilterDates(filterDates);

        if (
          filterDates &&
          filterDates.length > 0 &&
          com &&
          com.length > 0 &&
          vet &&
          vet.length > 0 &&
          cor &&
          cor.length > 0
        ) {
          setOptionsCVC({
            plugins: {
              title: {
                display: true,
                // text: "CVC évolution",
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          });

          setInformations({
            labels: [...filterDates],
            datasets: [
              {
                label: "Comportement",
                data: [...com.map((e) => e.value)],
                backgroundColor: "rgb(255, 99, 132)",
              },
              {
                label: "Vêtements",
                data: [...vet.map((e) => e.value)],
                backgroundColor: "rgb(75, 192, 192)",
              },
              {
                label: "Corps",
                data: [...cor.map((e) => e.value)],
                backgroundColor: "rgb(53, 162, 235)",
              },
            ],
          });
        }

        // return response.data;
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getFollowUpReportsIndicators",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        let com = response.data.filter((e) => e.indi.name === "Bailleur");
        let vet = response.data.filter(
          (e) => e.indi.name === "Hygiène logement"
        );
        let cor = response.data.filter((e) => e.indi.name === "Voisinage");

        let arrDates = [];
        response.data.forEach((element) => {
          let dateformated = new Date(element.fore.reportDate).toLocaleString(
            "fr-BE",
            {
              dateStyle: "short",
            }
          );
          arrDates.push(dateformated);
        });
        let filterDates = arrDates.filter(function (value, index, array) {
          return array.indexOf(value) === index;
        });

        setFilterDatesLogement(filterDates);

        if (
          filterDates &&
          filterDates.length > 0 &&
          com &&
          com.length > 0 &&
          vet &&
          vet.length > 0 &&
          cor &&
          cor.length > 0
        ) {
          setOptionsLogement({
            plugins: {
              title: {
                display: true,
                // text: "Type HESTIA",
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          });

          setInformationsLogement({
            labels: [...filterDates],
            datasets: [
              {
                label: "Sécurité",
                data: [...com.map((e) => e.value)],
                backgroundColor: "rgb(255, 99, 132)",
              },
              {
                label: "Santé",
                data: [...vet.map((e) => e.value)],
                backgroundColor: "rgb(75, 192, 192)",
              },
              {
                label: "Consommation",
                data: [...cor.map((e) => e.value)],
                backgroundColor: "rgb(53, 162, 235)",
              },
            ],
          });
        }

        // return response.data;
      })
      .catch(function (response) {});

    axios({
      method: "post",
      url: "/api/getFollowUpReportsIndicators",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        let com = response.data.filter((e) => e.indi.name === "Sécurité");
        let vet = response.data.filter((e) => e.indi.name === "Santé");
        let cor = response.data.filter((e) => e.indi.name === "Consommation");

        let arrDates = [];
        response.data.forEach((element) => {
          let dateformated = new Date(element.fore.reportDate).toLocaleString(
            "fr-BE",
            {
              dateStyle: "short",
            }
          );
          arrDates.push(dateformated);
        });
        let filterDates = arrDates.filter(function (value, index, array) {
          return array.indexOf(value) === index;
        });

        setFilterDatesDeces(filterDates);

        if (
          filterDates &&
          filterDates.length > 0 &&
          com &&
          com.length > 0 &&
          vet &&
          vet.length > 0 &&
          cor &&
          cor.length > 0
        ) {
          setOptionsDeces({
            plugins: {
              title: {
                display: true,
                // text: "Type HESTIA",
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          });

          setInformationsDeces({
            labels: [...filterDates],
            datasets: [
              {
                label: "Sécurité",
                data: [...com.map((e) => e.value)],
                backgroundColor: "rgb(255, 99, 132)",
              },
              {
                label: "Santé",
                data: [...vet.map((e) => e.value)],
                backgroundColor: "rgb(75, 192, 192)",
              },
              {
                label: "Consommation",
                data: [...cor.map((e) => e.value)],
                backgroundColor: "rgb(53, 162, 235)",
              },
            ],
          });
        }

        // return response.data;
      })
      .catch(function (response) {});
  }, [idPatient]);
  const onChangeIndicateurs = (e) => {
    if (e === "1") {
      setIndicateurCVCShow(true);
      setIndicateurLogementShow(false);
      setIndicateurDecesShow(false);
    }

    if (e === "2") {
      setIndicateurCVCShow(false);
      setIndicateurLogementShow(true);
      setIndicateurDecesShow(false);
    }

    if (e === "3") {
      setIndicateurCVCShow(false);
      setIndicateurLogementShow(false);
      setIndicateurDecesShow(true);
    }
  };
  return (
    <>
      <Form.Select
        size="lg"
        style={{ width: "186px" }}
        onChange={(e) => onChangeIndicateurs(e.target.value)}
        className="uk-select mb-4"
      >
        <option value={1}>CVC</option>
        <option value={2}>Hestia Logement</option>
        <option value={3}>HESTIA Deces</option>
      </Form.Select>

      {optionsCVC && informations && indicateurCVCShow && (
        <>
          <h6>CVC évolution</h6>
          <Bar options={optionsCVC} data={informations} />
        </>
      )}
      {optionsLogement && informationsLogement && indicateurLogementShow && (
        <>
          <h6>HESTIA Logement</h6>
          <Bar options={optionsLogement} data={informationsLogement} />
        </>
      )}
      {optionsDeces && informationsDeces && indicateurDecesShow && (
        <>
          <h6>HESTIA Deces</h6>
          <Bar options={optionsDeces} data={informationsDeces} />
        </>
      )}
    </>
  );
}
