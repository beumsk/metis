import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Menu from "../../Menu";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalAddLieux from "./Modal-Add-Lieux";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function Lieux() {
  const { SearchBar } = Search;
  const [auth, setAuth] = useState(useAuth());
  const [listContacts, setListContacts] = useState(null);
  const [lengthList, setLengthList] = useState(10);
  const [activePage, setActivePage] = useState(15);

  var formData = new FormData();
  formData.append("page", lengthList.toString());
  let linker = <a href="profil-lieux/1">Détails</a>;

  const sortCaret = (order, column) => {
    if (!order)
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} />/
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      );
    else if (order === "desc")
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} />/
          <FontAwesomeIcon icon={faArrowUp} color="#91bd10" />
        </span>
      );
    else if (order === "asc")
      return (
        <span>
          <FontAwesomeIcon icon={faArrowDown} color="#91bd10" />/
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      );
    return null;
  };

  const columns = [
    {
      dataField: "lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) =>
        row.url ? (
          <a href={row.url} target="_blank">
            {row.lastname}
          </a>
        ) : (
          row.lastname
        ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
    },
    {
      dataField: "occupants",
      text: "Occupants",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.occupants.length}</div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "Détails",
      text: "Détails",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <a href={"/profil-lieux/" + row.id} className="uk-link-muted">
            Détails
          </a>
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

  return (
    <>
      <Menu></Menu>

      <div className="container container-patients mx-auto ">
        <div style={{ float: "right" }}>
          <ModalAddLieux
            listContacts={listContacts}
            setListContacts={(e) => setListContacts(e)}
          ></ModalAddLieux>
        </div>

        <h1 className="mb-3">Tous les Lieux</h1>

        {listContacts && listContacts.data ? (
          <ToolkitProvider
            keyField="id"
            data={[...listContacts.data]}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="mb-2">
                  <SearchBar
                    {...props.searchProps}
                    className="uk-input"
                    style={{ width: "186px" }}
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
        ) : (
          <ReactLoading
            type={"spin"}
            color={"#b1b1b1"}
            height={"10%"}
            width={"10%"}
          />
        )}
      </div>
    </>
  );
}

export default Lieux;
