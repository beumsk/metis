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
  const [options, setOptions] = useState();
  const [filterDates, setFilterDates] = useState();
  const [filterDatesLogement, setFilterDatesLogement] = useState();
  const [filterDatesDeces, setFilterDatesDeces] = useState();
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
          setOptions({
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
          setOptions({
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
          setOptions({
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
  }, [idPatient]);

  return (
    <>
      {options && informations && (
        <>
          <h3>CVC évolution</h3>
          <Bar options={options} data={informations} />
        </>
      )}
      {options && informationsLogement && (
        <>
          <h3>HESTIA Logement</h3>
          <Bar options={options} data={informationsLogement} />
        </>
      )}
      {options && informationsDeces && (
        <>
          <h3>HESTIA Deces</h3>
          <Bar options={options} data={informationsDeces} />
        </>
      )}
    </>
  );
}
