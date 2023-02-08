import React, { useContext, useDebugValue } from "react";
import { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import zoomPlugin from "chartjs-plugin-zoom";
import Hammer from "hammerjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  zoomPlugin,
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
  const [informations, setInformations] = useState(null);
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
      url: "/api/getIndicatorsByPatientsGroupsByYear",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        let isCVC = response.data.filter((e) => e.isCVC === true);
        let isHestiaLogement = response.data.filter(
          (e) => e.isHestiaLogement === true
        );
        let isHestiaDeces = response.data.filter(
          (e) => e.isHestiaDeces === true
        );

        let arrDates = [];

        response.data.forEach((element) => {
          //
          // let dateformated = new Date(element.date).toLocaleString("fr-BE", {
          //   dateStyle: "short",
          // });
          arrDates.push(
            new Date(element.date).toLocaleString("fr-BE", {
              dateStyle: "short",
            })
          );
        });
        // let filterDates = arrDates.filter(function (value, index, array) {
        //   return array.indexOf(value) === index;
        // });
        let arr = arrDates.sort(function (a, b) {
          return Number(new Date(Number(a))) - Number(new Date(Number(b)));
        });

        setOptionsCVC({
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 10,
            },
            y2: {
              position: "right",
              min: 0,
              max: 10,
            },
            // x: {
            //   min: arr.length - 10,
            //   max: arr.length,
            // },
          },
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                drag: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: "xy",
                limits: {
                  y: { min: 0, max: 10 },
                  y2: { min: 0, max: 10 },
                },
              },
              overScaleMode: "xy",
            },
          },
        });
        if (arrDates && arrDates.length > 0) {
          setInformations({
            labels: [...arrDates],
            datasets: [
              {
                label: "CVC",
                data: [...isCVC.map((e) => e.scoreTotal)],
                backgroundColor: "rgb(255, 99, 132)",
                // borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
              },
              {
                label: "Hestia Logement",
                data: [...isHestiaLogement.map((e) => e.scoreTotal)],
                backgroundColor: "rgb(75, 192, 192)",
                // borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Hestia Décès",
                data: [...isHestiaDeces.map((e) => e.scoreTotal)],
                backgroundColor: "rgb(53, 162, 235)",
                // borderColor: "rgb(53, 162, 235)",
                tension: 0.1,
              },
            ],
          });
        }

        return response.data;
      })
      .catch(function (response) {});
  }, [idPatient]);

  return (
    <>
      {/* <Form.Select
        size="lg"
        style={{ width: "186px" }}
        onChange={(e) => onChangeIndicateurs(e.target.value)}
        className="uk-select mb-4"
      >
        <option value={1}>CVC</option>
        <option value={2}>Hestia Logement</option>
        <option value={3}>HESTIA Deces</option>
      </Form.Select> */}

      <>
        <h6>Indicateurs</h6>

        {informations !== null && (
          <Line options={optionsCVC} data={informations} />
        )}
      </>
      {/* {optionsLogement && informationsLogement && indicateurLogementShow && (
        <>
          <h6>HESTIA Logement</h6>
          <Line options={optionsLogement} data={informationsLogement} />
        </>
      )}
      {optionsDeces && informationsDeces && indicateurDecesShow && (
        <>
          <h6>HESTIA Deces</h6>
          <Line options={optionsDeces} data={informationsDeces} />
        </>
      )} */}
    </>
  );
}
