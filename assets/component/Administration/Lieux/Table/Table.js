import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
const TablePagination = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Occupants</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>
                {el.firstname} {el.lastname}
              </td>
              <td>{el.description}</td>
              <td>{el.occupants.length}</td>
              <td>
                <Link to={"/appels-organisation/" + el.id}>Détails</Link>
              </td>
              {/* <td>{el.numberPatients}</td>
              <td>{el.numberApps}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TablePagination;
