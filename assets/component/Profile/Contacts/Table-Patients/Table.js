import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";
import ModalEditContacts from "../Modal-Edit-Contacts";
import Table from "react-bootstrap/Table";
import ModalEditPatient from "../Modal-Edit-Patient";
const TablePatients = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  function onChangePatientsPatients(e) {
    props.onChangePatientsPatients(e);
  }
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Organisation</th>
            <th>Type</th>
            <th>Description</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((item) => (
            <tr>
              <td>
                {item?.orpa?.firstname} {item?.orpa?.lastname}
              </td>
              <td>
                {/* {new Date(patient.creationDate).toLocaleDateString()} */}
              </td>
              <td></td>
              <td>{item?.linkDesciption}</td>
              <td> </td>
              <td></td>

              <td>
                {" "}
                <span>
                  <ModalEditPatient
                    infos={item}
                    // onChangeContacts={(e) => contactLierResponse(e)}
                    onChangePatientsPatients={(e) =>
                      onChangePatientsPatients(e)
                    }
                    listPatients={slice}
                  />
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

export default TablePatients;
