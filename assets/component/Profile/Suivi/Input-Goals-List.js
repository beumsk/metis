import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCancel,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Editor from "./Editor-Reports";

function InputGoalsList(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  const animatedComponents = makeAnimated();
  formData.append("id", 57);
  //   formData.append("pathString", props.link);
  const [options, setOptions] = useState([]);
  const [selectFunction, setFunction] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [places, setPlaces] = useState(null);
  const [elementsOpt, setElementsOpt] = useState(null);
  const [defaultValue, setDefaultValue] = useState(props.defaultValue);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const handleClose = () => setShow(false);
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(selectedOption);
  const handleShow = () => setShow(true);
  const [contactValue, setContactValue] = useState(null);
  useEffect(() => {
    console.log(props?.goals);
    if (props?.goals?.data && props?.goals?.data.length > 0) {
      for (let index = 0; index < props?.goals?.data?.length; index++) {
        const element = props?.goals?.data[index];
        if (
          element.type === 1 &&
          (element.status === 0 || element.status === 1)
        ) {
          options.push({
            value: element.id,
            label: element.description,
          });
        }
      }
      console.log(options);
      setOptions(options);
    }

    let arr = [];
    for (let index = 0; index < defaultValue.length; index++) {
      const element = defaultValue[index];

      arr.push({
        value: element.id,
        label: element.description,
      });
    }

    setSelectedOption(arr);
    setDefaultValue(arr);
  }, [idPatient]);

  //   /api/getContacts
  const onChangeContact = (e) => {
    // props.onChangeGoals(e.target.value);
    // defaultValue

    let optionsValues = [];
    for (let index = 0; index < e.length; index++) {
      const element = e[index];

      optionsValues.push(element.value);
    }

    let difference = e.filter((d) => !defaultValue.includes(d));

    setSelectedOption(e);
    props.onChangeGoals(optionsValues);
  };

  return (
    <>
      <Form.Label htmlFor="inputValue">Objectifs</Form.Label>

      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        value={selectedOption}
        onChange={onChangeContact}
        isMulti
        options={options}
      />

      {/* <Form.Select
        size="lg"
        value={contactValue}
        className="uk-select"
        onChange={(e) => onChangeContact(e)}
      >
        <option>Choissisez l'objectif</option>
        {props?.goals?.data?.map((el, id) => (
          <>
            {el.type === 1 && (el.status === 0 || el.status === 1) && (
              <option
                value={el?.id}
                // selected={props.defaultValue === el?.id}
              >
                {el?.title} {el?.description}
              </option>
            )}
          </>
        ))}
      </Form.Select> */}
    </>
  );
}

export default InputGoalsList;
