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
import ModalDeleteContacts from "./Modal-Delete-Contacts";
import ModalDeletePatient from "./Modal-Delete-Patient";

const Contacts = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  var formData = new FormData();
  formData.append("id", id.toString());
  formData.append("antenna", auth.antenna);

  const [idPatient, setIdPatient] = useState(id);
  const [contacts, setContactsList] = useState(null);
  const [listContacts, setContacts] = useState(null);
  const [options, setOptions] = useState();
  const [type, setType] = useState(null);
  const [contactList, setContactList] = useState();
  const [filterDates, setFilterDates] = useState();
  const [patients, setPatients] = useState(null);
  const [patientsLists, setPatientsLists] = useState(null);
  useEffect(() => {
    var formDataSugg = new FormData();
    formDataSugg.append("id", 57);
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formDataSugg,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setType(response);
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
        setContactsList(response);
      })
      .catch(function (response) {});
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
        console.log(response);
        setContacts(response.data);
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
        console.log(response);
        setPatientsLists(response.data);
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
        setContactList(response.data);
      })
      .catch(function (response) {});
    var formDataPati = new FormData();
    formDataPati.append("antenna", auth.antenna);

    axios({
      method: "post",
      url: "/api/getAllPatients",
      data: formDataPati,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setPatients(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

  const columnsPatients = [
    {
      dataField: "orpa.nicknames",
      text: "Surnom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.nicknames}</div>
      ),
    },
    {
      dataField: "orpa.firstname",
      text: "Prenom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.firstname}</div>
      ),
    },
    {
      dataField: "orpa.lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.lastname}</div>
      ),
    },
    {
      dataField: "sugg.value",
      text: "Type",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.sugg?.value}</div>
      ),
    },
    {
      dataField: "linkDescription",
      text: "Description",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.linkDescription === "null" ? "" : row?.linkDescription}</div>
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
          {row?.end === "null"
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
            type={type}
            contacts={patients}
            // onChangeContacts={(e) => contactLierResponse(e)}
            onChangeUpdateContact={onChangeUpdateContact}
            listContacts={listContacts}
            // listContactsSelect={props.listContacts}
            // infos={row}
            // // onChangeContacts={(e) => contactLierResponse(e)}
            // listPatients={patients}
            // onChangeUpdatePatient={onChangeUpdatePatient}
            // type={type}
            // contacts={patients && patients.data.length > 0 ? patients : null}
            // // listContactsSelect={props.listContacts}
          />
          <ModalDeletePatient
            infos={row}
            onChangeUpdatePatient={onChangeUpdatePatient}
          ></ModalDeletePatient>
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
          {row?.cont?.map((cont) => (
            <>
              {cont?.firstname} {cont?.lastname}
            </>
          ))}
        </div>
      ),
    },
    {
      dataField: "cont.description",
      text: "Organisation",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.cont?.map((cont) => (
            <>{cont?.description}</>
          ))}
        </div>
      ),
    },
    {
      dataField: "value",
      text: "Type",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {" "}
          {row?.sugg?.map((cont) => (
            <>{cont?.value}</>
          ))}
        </div>
      ),
    },
    {
      dataField: "comment",
      text: "Description",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.comment === "null" ? "" : row?.comment}</div>
      ),
    },
    {
      dataField: "start",
      text: "Début",

      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.start === "null"
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
          {row?.end === "null"
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
            type={type}
            contacts={contacts}
            // onChangeContacts={(e) => contactLierResponse(e)}
            onChangeUpdateContact={onChangeUpdateContact}
            listContacts={listContacts}
            // listContactsSelect={props.listContacts}
          />
          <ModalDeleteContacts
            infos={row}
            onChangeUpdateContact={onChangeUpdateContact}
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

  const onChangeUpdatePatient = (e) => {
    console.log(e);
    setPatientsLists(e);
  };

  function onChangeUpdateContact(e) {
    console.log(e);
    setContacts(e);
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

  function onChangePatients(e) {
    setPatients(e.data);
  }
  return (
    <div className="onglet-contact">
      {listContacts && listContacts.length > 0 && (
        <div className="d-flex mb-4 row-btn">
          <ModalLierPatient
            listPatients={patients}
            onChangeUpdatePatient={onChangeUpdatePatient}
            type={type}
            contacts={patients}
          ></ModalLierPatient>
          <ModalLierContacts
            onChangeUpdateContact={onChangeUpdateContact}
            type={type}
            contacts={contacts}
            listContacts={contactList}
          ></ModalLierContacts>
        </div>
      )}

      <h5>Personnes</h5>
      {listContacts && listContacts.length > 0 ? (
        <ToolkitProvider
          keyField="id"
          data={[...listContacts]}
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
      {patientsLists && patientsLists.length > 0 ? (
        <ToolkitProvider
          keyField="id"
          data={patientsLists}
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
