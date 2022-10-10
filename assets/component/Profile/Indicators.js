import React from "react";
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
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
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
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
// console.log(faker.datatype.number({ min: -1000, max: 1000 }));

export let obj = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [674, 954, 652, 454, -707, -948, 444],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [-167, -432, -907, 559, -207, -622, 67],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [-63, -202, 465, 866, -289, 366, 40],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [674, 954, 652, 454, -707, -948, 444],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [-167, -432, -907, 559, -207, -622, 67],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [-63, -202, 465, 866, -289, 366, 40],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

console.log(data);
export default function App() {
  return <Bar options={options} data={data} />;
}
