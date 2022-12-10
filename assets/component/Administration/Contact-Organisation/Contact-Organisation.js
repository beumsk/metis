import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import Pagination from "react-js-pagination";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
function ContactOrganisations() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [lengthList, setLengthList] = useState(10);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
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
          <a href={"/profil-contact/" + row.id}>Détails</a>
        </div>
      ),
    },
  ];
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getContacts",
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
        <h4>Liste de contacts</h4>
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
                    className="uk-input"
                    {...props.searchProps}
                    placeholder="Rechercher dans les appels"
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

export default ContactOrganisations;
