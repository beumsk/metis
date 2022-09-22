import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import PersistLogin from "./PersistLogin";
import useAuth from "../hooks/useAuth";

function Patients() {
  const [auth, setAuth] = useState(useAuth());
  const [patientsList, setPatientsList] = useState(null);

  useEffect(() => {
    const patients = axios.get("/api/getPatients", {
      headers: { Authorization: `Bearer ${auth.auth.accessToken}` },
    });

    patients.catch().then((e) => {
      //   console.log(e);
      if (patientsList === null) {
        setPatientsList(e);
      }
    });
    console.log(patientsList);
    // patients.catch(e => e);
  });

  return (
    <div className="container-patients row m-0">
      <h1>Patients Page</h1>

      <Table striped>
        {/* <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead> */}
        <tbody>
          {patientsList && patientsList.data && patientsList.data.length > 0 && (
            <>
              {patientsList.data.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.firstname}</td>
                  <td>{patient.lastname}</td>
                  <td>{patient.story}</td>
                  <td>{patient.status}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Patients;
