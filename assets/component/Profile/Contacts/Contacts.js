import React, { useContext, useDebugValue, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalLierPatient from "./Modal-Lier-Patient";
import ModalLierContacts from "./Modal-Lier-Contacts";
import ModalEditContacts from "./Modal-Edit-Contacts";
import ModalEditPatient from "./Modal-Edit-Patient";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ModalDeleteContacts from "./Modal-Delete-Contacts";
import ModalDeletePatient from "./Modal-Delete-Patient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  let id = useParams().id;
  const [auth, setAuth] = useState(useAuth());
  let formData = new FormData();
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
    let formDataSugg = new FormData();
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
    let formDataPati = new FormData();
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
        setPatients(response);
      })
      .catch(function (response) {});
  }, [idPatient]);

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

  const columnsPatients = [
    {
      dataField: "orpa.nicknames",
      text: "Surnom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.nicknames}</div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "orpa.firstname",
      text: "Prénom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.firstname}</div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "orpa.lastname",
      text: "Nom",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.orpa?.lastname}</div>
      ),
      sort: true,
      sortCaret: sortCaret,
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
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.start
            ? new Date(row?.start).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "end",
      text: "Fin",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.end
            ? new Date(row?.end).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "Actions",
      text: "Actions",

      formatter: (cell, row, rowIndex, extraData) => (
        <div className="d-flex">
          <ModalEditPatient
            infos={row}
            type={type}
            contacts={patients}
            // onChangeContacts={(e) => contactLierResponse(e)}
            // onChangeUpdateContact={onChangeUpdateContact}
            listPatients={patients}
            // listContactsSelect={props.listContacts}
            // infos={row}
            // // onChangeContacts={(e) => contactLierResponse(e)}
            // listPatients={patients}
            onChangeUpdatePatient={onChangeUpdatePatient}
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
    },
  ];

  const columns = [
    {
      dataField: "cont",
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
      sort: true,
      // sortCaret: sortCaret,
      // sortFunc: (a, b, order, dataField, rowA, rowB) => {
      //   if (order === "asc") {
      //     console.log(a, b, order);
      //     return b[0]?.firstname - a[0]?.firstname;
      //   }
      //   return a[0]?.firstname - b[0]?.firstname; // desc
      // },
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
      sort: true,
      // sortCaret: sortCaret,
    },
    {
      dataField: "cont[0].value",
      text: "Type",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.sugg?.map((cont) => (
            <>{cont?.value}</>
          ))}
        </div>
      ),
      sort: true,
      // sortCaret: sortCaret,
    },
    {
      dataField: "comment",
      text: "Description",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>{row?.comment === "null" ? "" : row?.comment}</div>
      ),
      sort: true,
      // sortCaret: sortCaret,
    },
    {
      dataField: "start",
      text: "Début",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.start
            ? new Date(row?.start).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "end",
      text: "Fin",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          {row?.end
            ? new Date(row?.end).toLocaleString("fr-BE", "short").slice(0, 10)
            : ""}
        </div>
      ),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: "Actions",
      text: "Actions",
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
      sort: true,
    },
  ];

  const onChangeUpdatePatient = (e) => {
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
        setPatientsLists(response.data);
      })
      .catch(function (response) {});
  };

  function onChangeUpdateContact(e) {
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
        setContacts(response.data);
      })
      .catch(function (response) {});
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
      <div className="d-flex mb-4 row-btn">
        <ModalLierContacts
          onChangeUpdateContact={onChangeUpdateContact}
          type={type}
          contacts={contacts}
          listContacts={contactList}
        ></ModalLierContacts>
        <ModalLierPatient
          listPatients={patients}
          onChangeUpdatePatient={onChangeUpdatePatient}
          type={type}
          contacts={patients}
        ></ModalLierPatient>
      </div>

      <h5>Contacts</h5>
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
        <p>{listContacts ? "Pas de contact pour ce contact." : "Loading"}</p>
      )}

      <h5>Patients</h5>
      {patientsLists && patients && patientsLists.length > 0 ? (
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
        <p>{patientsLists ? "Pas de patient pour ce contact." : "Loading"}</p>
      )}
    </div>
  );
};

export default Contacts;
