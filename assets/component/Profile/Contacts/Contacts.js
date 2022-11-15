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

const Contacts = () => {
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", id.toString());
  const [auth, setAuth] = useState(useAuth());
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

  function onChangePatientsPatients(e) {
    console.log(e);
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

      <h5>Contacts</h5>
      {listContacts && listContacts.data.length > 0 && (
        <>
          <TableContacts
            data={[...listContacts.data]}
            rowsPerPage={4}
            listContacts={contactList}
            onChangeUpdateContact={(e) => onChangeUpdateContact(e)}
          />
        </>
      )}

      <h5>Patients</h5>
      {patientsLists && patientsLists.data.length > 0 && (
        <>
          <TablePatients
            data={[...patientsLists.data]}
            rowsPerPage={4}
            // listPatients={patients}
            onChangePatientsPatients={(e) => onChangePatientsPatients(e)}
          />
        </>
      )}
    </div>
  );
};

export default Contacts;
