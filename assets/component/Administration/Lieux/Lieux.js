import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
// import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";

function Lieux() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [activePage, setActivePage] = useState(15);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  let linker = <a href="profil-lieux/1">Détails</a>;
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      sort: true,
    },
    {
      dataField: "lastname",
      text: "Nom",
      sort: true,
    },
    {
      dataField: "Détails",
      text: "Product Price",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <a href={"/profil-lieux/" + row.id}>Détails</a>
        </div>
      ),
    },
  ];
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getPlacesList",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        //handle success
        setListContacts(response);
      })
      .catch(function (response) {});
  }, [lengthList, setLengthList]);

  const readMore = () => {
    setLengthList(lengthList + 10);
  };

  function onChangeUpdateContact(e) {
    props.onChangeUpdateContact(e);
  }

  return (
    <>
      <Menu></Menu>
      <div className="container container-patients row mx-auto ">
        <h3>Tous les Lieux</h3>
        {listContacts && listContacts.data && (
          <ToolkitProvider
            keyField="id"
            data={[...listContacts.data]}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="mb-2 mt-2">
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Rechercher le lieu"
                  />
                </div>

                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        )}
      </div>
    </>
  );
}

export default Lieux;
