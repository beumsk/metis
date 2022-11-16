import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";
// import "./Table.module.css";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
const TablePagination = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  console.log(slice);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Nom</th>
            <th>Nb. patients</th>
            <th>Nb. patients</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>
                {el.firstname}
                {el.lastname}
              </td>

              <td>{el.numberPatients}</td>
              <td>{el.numberApps}</td>
              <td>
                <Link to={"/" + el.id}>Détails</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TablePagination;
