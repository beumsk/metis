import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
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
import AddActivitiesByReport from "./Add-ActivitiesByReports";
import AddIndicateursByReport from "./Indicateurs-Form-AddReports/Add-IndicateursByReports";
import AddSoinsByReport from "./Add-SoinsByReports";
import InputPlaceList from "./Input-Place-List";
import InputContactList from "./Input-Contact-List";
function AddReportMeet(props) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(useAuth());
  let id = useParams().id;
  var formData = new FormData();
  formData.append("id", 57);

  const [userId, setUserId] = useState(null);
  const [patiId, setPatiId] = useState(null);
  var formActivitiesDatas = new FormData();
  formActivitiesDatas.append("id", 106);
  const [formSoins, setFormSoins] = useState([{ id: 0 }]);
  const [formActivities, setFormActivities] = useState([{ id: 0 }]);
  const [formIndicateurs, setFormIndicateurs] = useState([{ id: 0 }]);
  const [selectedTypeCVC, setSelectedTypeCVC] = useState(null);
  //   formData.append("pathString", props.link);
  const [options, setOptions] = useState([
    "Sélectionnez le type d'indicateurs",
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [contacts, setContacts] = useState(null);
  const [showAccesSoins, setAccesSoins] = useState(false);
  const [showActivities, setActivities] = useState(false);
  const [showIndicateurs, setChoiceIndicateurs] = useState(false);
  const [idPatient, setIdPatient] = useState(id);
  const [type, setType] = useState(null);
  const [typeFormActivities, setTypeFormActivities] = useState(null);
  const [meetType, setMeetType] = useState(null);
  const [goalsInput, setGoalsInput] = useState(null);
  const [changeTypeMeet, setChangeTypeMeet] = useState(null);
  const [changeDate, setChangeDate] = useState(null);
  const [changeGoals, setChangeGoals] = useState(null);
  const [changeContacts, setChangeContacts] = useState(null);
  const [changePlaces, setChangePlaces] = useState(null);
  const [changeEditor, setChangeEditor] = useState(null);

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/suggestionsById",
      data: formData,
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
      url: "/api/suggestionsById",
      data: formActivitiesDatas,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setTypeFormActivities(response);
      })
      .catch(function (response) {});
    setPatiId(idPatient);
    setUserId(auth.auth.idUser);
  }, [idPatient]);

  const choiceActivities = (e) => {
    // console.log(e);
    setActivities(e);
  };
  const choiceSoins = (e) => {
    setAccesSoins(e);
  };
  const choiceIndicateurs = (e) => {
    setChoiceIndicateurs(e);
  };

  const inputChangeTypeMeet = (e) => {
    console.log(e.target.value);
    setChangeTypeMeet(e.target.value);
  };

  const onChangeDate = (e) => {
    console.log(e.target.value);
    setChangeDate(e.target.value);
  };

  const inputChangeGoals = (e) => {
    console.log(e);
    setChangeGoals(e);
  };

  const onChangeContacts = (e) => {
    console.log(e);
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    console.log(e);
    setChangePlaces(e);
  };

  useEffect(() => {}, []);
  const onClickAddActivities = (e) => {
    setFormActivities((prevFormSoins) => [...prevFormSoins, e]);
  };

  function editorChange(e) {
    console.log(e);
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs.length < 3) {
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };
  const onClickOnCare = (e) => {
    // console.log(e);
    setFormSoins((prevFormSoins) => [...prevFormSoins, e]);
  };

  const onClickDeleteOnCare = (e) => {
    if (formSoins.length > 0) {
      let filter = formSoins.filter((el) => el.id !== e);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;
        setFormSoins(filter);
      }
    }
  };

  const onClickDeleteActivitiesForm = (e) => {
    if (formActivities.length > 0) {
      let filter = formActivities.filter((el) => el.id !== e);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;
        setFormActivities(filter);
      }
    }
  };

  const onClickDeleteIndicateursForm = (e) => {
    if (formIndicateurs.length > 0 && formIndicateurs.length < 4) {
      let filter = formIndicateurs.filter((el) => el.id !== e);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;
        setFormIndicateurs(filter);

        options.push(filter[0].type);
      }
    }
  };

  const sentRapport = (e) => {
    var formData = new FormData();

    formData.append("activityType", 1);
    formData.append("contacts", contacts);
    formData.append("changeTypeMeet", changeTypeMeet);
    formData.append("changeDate", changeDate);
    formData.append("changeGoals", changeGoals);
    formData.append("contId", changeContacts);
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", goalsInput);
    formData.append("meetType", meetType);
    formData.append("formSoins", JSON.stringify(formSoins));
    formData.append("formActivities", JSON.stringify(formActivities));
    formData.append("formIndicateurs", JSON.stringify(formIndicateurs));
    formData.append("userId", userId);
    formData.append("patiId", patiId);

    console.log(formActivities);
    // axios({
    //   method: "post",
    //   url: "/api/sendReport",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.auth.accessToken}`,
    //   },
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     console.log(response);
    //   });
  };

  function onChangeValuesByOnCareForm(e) {
    if (formSoins.filter((el) => e[0].id === el.id)) {
      formSoins.filter((el) => e[0].id === el.id)[0].type = e[0].type;
      formSoins.filter((el) => e[0].id === el.id)[0].contact = e[0].contact;
      formSoins.filter((el) => e[0].id === el.id)[0].place = e[0].place;
      formSoins.filter((el) => e[0].id === el.id)[0].description =
        e[0].description;

      console.log(formSoins);
    }
  }

  function onChangeValuesByActivitiesForm(e) {
    console.log(e);
    // console.log("form soins", formSoins);
    if (formActivities.filter((el) => e[0].id === el.id)) {
      formActivities.filter((el) => e[0].id === el.id)[0].type = e[0].type;
      formActivities.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact;
      formActivities.filter((el) => e[0].id === el.id)[0].place = e[0].place;
      formActivities.filter((el) => e[0].id === el.id)[0].description =
        e[0].description;
      console.log(formActivities);
    }
  }

  function onChangeValuesIndicateursForm(e) {
    console.log("ADD indicateurs", e);
    // setSelectedTypeCVC(e[0].selectedOptionType);

    if (formIndicateurs.filter((el) => e[0].id === el.id)) {
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id = e[0].id;
      formIndicateurs.filter((el) => e[0].id === el.id)[0].indicateursFormCVC =
        e[0].indicateursFormCVC;
      formIndicateurs.filter(
        (el) => e[0].id === el.id
      )[0].indicateursFormHestiaRisqueDeces =
        e[0].indicateursFormHestiaRisqueDeces;
      formIndicateurs.filter(
        (el) => e[0].id === el.id
      )[0].indicateursEstLeLogement = e[0].indicateursEstLeLogement;
    }

    if (
      formIndicateurs &&
      formIndicateurs.length > 0 &&
      formIndicateurs.type !== null
    ) {
      for (let index = 0; index < options.length; index++) {
        const element = options[index];
        if (
          formIndicateurs[formIndicateurs.length - 1].type !== null &&
          formIndicateurs[formIndicateurs.length - 1].type === element
        ) {
          options.splice(index, 1);
        }
      }
    }
  }
  return (
    <div className="report-content">
      <h5 className="mt-4 mb-4">Ajouter un rapport</h5>
      {/* <Form.Control type="text" id="inputText" className="mt-4" /> */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des soins ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceSoins(true)}
              name="group1"
              type={"radio"}
              id={`inline-radio-1`}
            />
            <Form.Check
              inline
              label="Non"
              name="group1"
              defaultChecked="true"
              onClick={(e) => choiceSoins(false)}
              type={"radio"}
              id={`inline-radio-2`}
            />
          </div>
        </div>
        <div>
          {showAccesSoins && (
            <div className="sous-form">
              {formSoins.map((form, idx) => (
                <>
                  <AddSoinsByReport
                    key={form.id}
                    id={idx}
                    type={type}
                    contacts={props?.contacts}
                    places={props.places}
                    onChange={onChangeValuesByOnCareForm}
                  ></AddSoinsByReport>
                  {formSoins && formSoins.length > 1 && (
                    <button onClick={(e) => onClickDeleteOnCare(form.id)}>
                      Supprimer un autre soin
                    </button>
                  )}
                </>
              ))}

              <button onClick={(e) => onClickOnCare({ id: formSoins.length })}>
                Ajouter un autre soin
              </button>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`} className="mb-3">
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des activitées ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceActivities(true)}
              name="group2"
              type={"radio"}
              id={`inline-radio-3`}
            />
            <Form.Check
              inline
              label="Non"
              defaultChecked="true"
              name="group2"
              onClick={(e) => choiceActivities(false)}
              type={"radio"}
              id={`inline-radio-4`}
            />
          </div>
        </div>
        <div>
          {showActivities && (
            <div className="sous-form">
              {formActivities.map((form, idx) => (
                <>
                  <AddActivitiesByReport
                    type={typeFormActivities}
                    id={idx}
                    key={form.id}
                    contacts={props.contacts}
                    places={props.places}
                    onChange={onChangeValuesByActivitiesForm}
                  ></AddActivitiesByReport>
                  {formActivities && formActivities.length > 1 && (
                    <button
                      onClick={(e) => onClickDeleteActivitiesForm(form.id)}
                    >
                      Supprimer un autre soin
                    </button>
                  )}
                </>
              ))}
              <button
                onClick={(e) =>
                  onClickAddActivities({ id: formActivities.length })
                }
              >
                Ajouter un autre activitée
              </button>
            </div>
          )}
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
          <div key={`inline-radio`}>
            <Form.Label htmlFor="inputValue" className="mr-4">
              Y'a t'il des indicateurs ?
            </Form.Label>
            <Form.Check
              inline
              label="Oui"
              onClick={(e) => choiceIndicateurs(true)}
              name="group3"
              type={"radio"}
              id={`inline-radio-5`}
            />
            <Form.Check
              inline
              label="Non"
              defaultChecked="true"
              name="group3"
              onClick={(e) => choiceIndicateurs(false)}
              type={"radio"}
              id={`inline-radio-6`}
            />
          </div>
        </div>
        <div>
          {showIndicateurs && (
            <div className="sous-form">
              {formIndicateurs.map((form, idx) => (
                <>
                  <AddIndicateursByReport
                    type={type}
                    key={form.id}
                    id={idx}
                    form={form}
                    options={options}
                    formIndicateurs={formIndicateurs}
                    onChange={onChangeValuesIndicateursForm}
                    contacts={props.contacts}
                    places={props.places}
                  ></AddIndicateursByReport>
                  {formIndicateurs && (
                    <button
                      onClick={(e) => onClickDeleteIndicateursForm(form.id)}
                    >
                      Supprimer un autre soin
                    </button>
                  )}
                </>
              ))}
              {formIndicateurs && formIndicateurs.length < 3 && (
                <button
                  onClick={(e) =>
                    onClickAddIndicateurs({ id: formIndicateurs.length })
                  }
                >
                  Ajouter un autre indicateur
                </button>
              )}
            </div>
          )}
        </div>
      </Form.Group>

      <Form.Label htmlFor="inputValue">Type de rencontre</Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => inputChangeTypeMeet(e)}
        value={meetType}
      >
        <>
          <option>Choissisez votre type de rencontre</option>
          <option value={"Vu"}>Vu</option>
          <option value={"Rencontre"}>Rencontre</option>
          <option value={"Repos"}>Repos</option>
          <option value={"Recherche"}>Recherche</option>
        </>
      </Form.Select>

      <Form.Label htmlFor="inputValue">Date de la rencontre</Form.Label>
      <Form.Control
        type="date"
        defaultValue={new Date("now")}
        placeholder="Here edit the release date"
        onChange={(e) => onChangeDate(e)}
        id="inputValueSpécifique"
      />

      <Form.Label htmlFor="inputValue">Objectifs</Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => inputChangeGoals(e)}
        value={goalsInput}
      >
        <>
          <option>Objectifs non chargées pour l'instant</option>
        </>
      </Form.Select>

      <InputContactList contacts={props.contacts} onChange={onChangeContacts} />
      <InputPlaceList places={props.places} onChange={onChangePlaces} />

      <Editor onChange={editorChange}></Editor>

      <button onClick={(e) => sentRapport(e)}>Envoyer</button>
    </div>
  );
}

export default AddReportMeet;
