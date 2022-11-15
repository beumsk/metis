import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";

const TablePagination = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>{el.firstname}</td>
              <td>{el.lastname}</td>
              <td>{el.type}</td>
              <td>{el.numberPatients}</td>
              <td>{el.numberApps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TablePagination;
