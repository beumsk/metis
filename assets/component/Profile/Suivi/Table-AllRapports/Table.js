import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";
import Table from "react-bootstrap/Table";
const TableAllRapports = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(data, page, rowsPerPage);
  console.log(data);

  function onChangePatientsPatients(e) {
    props.onChangePatientsPatients(e);
  }
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date de création</th>
            <th>Objectifs</th>
            <th>Contact(s)</th>
            <th>Soins(s)</th>
            <th>Activité(s)</th>
            <th>Important</th>
            <th>Ind.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((patient) => (
            <tr>
              <td>
                {patient?.activityType === 1 ? "Rencontre" : null}
                {patient?.activityType === 2 ? "Appel entrant" : null}
                {patient?.activityType === 3 ? "Appel sortant" : null}
                {patient?.activityType === 4 ? "Objectif" : null}
              </td>
              <td>{new Date(patient.creationDate).toLocaleDateString()}</td>
              <td></td>
              <td>
                {patient?.cont && (
                  <>
                    {patient?.cont[0]?.firstname} {patient?.cont[0]?.lastname}
                  </>
                )}
              </td>
              <td>{patient.noCare}</td>
              <td>{patient.noIndicators}</td>
              <td>{patient.noIndicators}</td>
              <td></td>
              <td>
                {" "}
                <span>
                  <button>Détails</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TableAllRapports;
