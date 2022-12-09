import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalLierPatient from "./Modal-Lier-Patient";
import ModalLierContacts from "./Modal-Lier-Contacts";
import Table from "react-bootstrap/Table";
import ModalEditContacts from "./Modal-Edit-Contacts";
import ModalEditPatient from "./Modal-Edit-Patient";
import TableContacts from "./Table-Contacts/Table.js";
import TablePatients from "./Table-Patients/Table.js";

import countriesData from "./data.js";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const Contacts = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("antenna", auth.antenna);

  const [idPatient, setIdPatient] = useState(id);
  const [listContacts, setContacts] = useState(null);
  const [options, setOptions] = useState();
  const [contactList, setContactList] = useState();
  const [filterDates, setFilterDates] = useState();
  const [patients, setPatients] = useState(null);
  const [patientsLists, setPatientsLists] = useState(null);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getContactsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setContacts(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getPatientsByPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatientsLists(response);
      })
      .catch(function (response) {});
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
        setContactList(response);
      })
      .catch(function (response) {});
    axios({
      method: "post",
      url: "/api/getAllPatients",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setPatients(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  const columnsPatients = [
    {
      dataField: "nickname",
      text: "Surnom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.orpa.nicknames}</div>
      ),
    },
    {
      dataField: "firstname",
      text: "Prenom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.orpa.firstname}</div>
      ),
    },
    {
      dataField: "lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.orpa.lastname}</div>
      ),
    },
    {
      dataField: "value",
      text: "Type",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.sugg?.value}</div>
      ),
    },
    {
      dataField: "description",
      text: "Description",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.linkDescription === "null" ? "" : row.linkDescription}</div>
      ),
    },
    {
      dataField: "start",
      text: "Début",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.start === "null"
            ? ""
            : new Date(row?.start).toLocaleString("fr-BE", "short")}
        </div>
      ),
    },
    {
      dataField: "end",
      text: "Fin",
      sort: true,
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.end === "null"
            ? ""
            : new Date(row?.end).toLocaleString("fr-BE", "short")}
        </div>
      ),
    },
    {
      dataField: "Actions",
      text: "Comment",

      formatter: (cell, row, rowIndex, extraData) => (
        <div className="d-flex">
          <ModalEditPatient
            infos={row}
            // onChangeContacts={(e) => contactLierResponse(e)}
            onChange={(e) => onChangeUpdateContact(e)}
            listContacts={listContacts}
            // listContactsSelect={props.listContacts}
          />
        </div>
      ),

      text: "Actions",
    },
  ];
  const columns = [
    {
      dataField: "firstname + lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.cont[0].firstname} {row.cont[0].lastname}
        </div>
      ),
    },
    {
      dataField: "description",
      text: "Organisation",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.cont[0].firstname} {row.cont[0].firstname}
        </div>
      ),
    },
    {
      dataField: "value",
      text: "Type",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.sugg[0]?.value}</div>
      ),
    },
    {
      dataField: "description",
      text: "Description",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row.description === "null" ? "" : row.description}</div>
      ),
    },
    {
      dataField: "start",
      text: "Début",

      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.start === "null"
            ? ""
            : new Date(row?.start).toLocaleString("fr-BE", "short")}
        </div>
      ),
    },
    {
      dataField: "end",
      text: "Fin",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row.end === "null"
            ? ""
            : new Date(row?.end).toLocaleString("fr-BE", "short")}
        </div>
      ),
    },
    {
      dataField: "Actions",
      text: "Comment",

      formatter: (cell, row, rowIndex, extraData) => (
        <div className="d-flex">
          <ModalEditContacts
            infos={row}
            // onChangeContacts={(e) => contactLierResponse(e)}
            onChange={(e) => onChangeUpdateContact(e)}
            listContacts={listContacts}
            // listContactsSelect={props.listContacts}
          />
        </div>
      ),

      text: "Actions",
    },
  ];

  const defaultSortedBy = [
    {
      dataField: "start",
      order: "desc", // or desc
    },
    {
      dataField: "end",
      order: "asc", // or desc
    },
  ];
  function onChangePatientsPatients(e) {
    if (e && e.data?.data) {
      setContacts(e.data?.data);
    }
  }

  function onChangeUpdateContact(e) {
    if (e && e.response) {
      setContacts(e.response);
    }
  }

  function patientLierResponse(e) {
    if (e && e.response) {
      setPatientsLists(e.response);
    }
  }

  function contactLierResponse(e) {
    if (e && e.response) {
      setContacts(e.response);
    }
  }

  function onChangeUpdateContact(e) {
    setContacts(e.data);
  }

  function onChangePatients(e) {
    setPatients(e.data);
  }
  return (
    <div className="onglet-contact">
      {listContacts && listContacts.data.length > 0 && (
        <div className="d-flex mb-4 row-btn">
          <ModalLierPatient
            listPatients={patients}
            onChangePatients={(e) => patientLierResponse(e)}
          ></ModalLierPatient>
          <ModalLierContacts
            onChangeContacts={(e) => contactLierResponse(e)}
            listContacts={contactList}
          ></ModalLierContacts>
        </div>
      )}

      <h5>Personnes</h5>
      {listContacts && listContacts.data.length > 0 ? (
        <ToolkitProvider
          keyField="id"
          data={[...listContacts.data]}
          columns={columns}
          sort={
            ({ dataField: "end", order: "desc" },
            { dataField: "start", order: "asc" })
          }
          search
        >
          {(props) => (
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          )}
        </ToolkitProvider>
      ) : (
        <p>Loading</p>
      )}

      <h5>Patients</h5>
      {patientsLists && patientsLists.data.length > 0 ? (
        <ToolkitProvider
          keyField="id"
          data={[...patientsLists.data]}
          columns={columnsPatients}
          search
        >
          {(props) => (
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          )}
        </ToolkitProvider>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Contacts;
