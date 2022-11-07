import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
import TableFooter from "./TableFooter";
import ModalEditContacts from "../Modal-Edit-Contacts";
import Table from "react-bootstrap/Table";
const TableContacts = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  console.log(slice);

  function onChangeUpdateContact(e) {
    props.onChangeUpdateContact(e);
  }
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Surnom</th>
            <th>Prénom</th>
            <th>Nom</th>
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
              <td></td>
              <td>{item?.cont?.firstname}</td>
              <td>{item?.cont?.lastname}</td>
              <td></td>
              <td>{item.comment}</td>
              <td></td>
              <td></td>

              <td>
                {" "}
                <span>
                  <ModalEditContacts
                    infos={item}
                    // onChangeContacts={(e) => contactLierResponse(e)}
                    onChangeUpdateContact={(e) => onChangeUpdateContact(e)}
                    listContacts={slice}
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

export default TableContacts;
