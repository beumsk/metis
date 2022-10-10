import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../..//hooks/useAuth";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import CChart from "@coreui/react-chartjs";

export default function Charter() {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  const [idPatient, setIdPatient] = useState(id);
  useEffect(() => {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "World Wine Production 2018",
        },
      },
    });
  }, [idPatient]);

  return (
    <CChart
      type="bar"
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      }}
      labels="months"
    />
  );
}
