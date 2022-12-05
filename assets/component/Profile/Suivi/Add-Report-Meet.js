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
    "HESTIA - Risque perte logement",
    "CVC",
    "HESTIA - Risque décès",
  ]);
  const [optionsConst, setOptionsConst] = useState([
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
  const [changeOptions, setChangeOptions] = useState(null);

  let [validationCare, setValidationCare] = useState(null);
  let [validationHestiaLogement, setValidationHESTIALogement] = useState(null);
  let [validationHESTIADeces, setValidationHESTIADeces] = useState(null);
  let [validationCVC, setValidationCVC] = useState(null);
  let [validationActivities, setValidationActivities] = useState(null);

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
    setOptions(options);
  }, [options]);

  const choiceActivities = (e) => {
    //
    setActivities(e);
  };
  const choiceSoins = (e) => {
    setAccesSoins(e);
  };
  const choiceIndicateurs = (e) => {
    setChoiceIndicateurs(e);

    if (e === false) {
      setFormIndicateurs([{ id: 0 }]);
      setOptions([
        "HESTIA - Risque perte logement",
        "CVC",
        "HESTIA - Risque décès",
      ]);
    }
  };

  const inputChangeTypeMeet = (e) => {
    setChangeTypeMeet(e.target.value);
  };

  const onChangeDate = (e) => {
    setChangeDate(e.target.value);
  };

  const inputChangeGoals = (e) => {
    setChangeGoals(e);
  };

  const onChangeContacts = (e) => {
    setChangeContacts(e);
  };

  const onChangePlaces = (e) => {
    setChangePlaces(e);
  };

  const onClickAddActivities = (e) => {
    setFormActivities((prevFormSoins) => [...prevFormSoins, e]);
    console.log(formActivities);
  };

  function editorChange(e) {
    setChangeEditor(e);
  }
  const onClickAddIndicateurs = (e) => {
    if (formIndicateurs && formIndicateurs.length < 3) {
      setFormIndicateurs((prevFormSoins) => [...prevFormSoins, e]);
    }
  };
  const onClickOnCare = (e) => {
    //
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
  let arrId = [];
  const onClickDeleteIndicateursForm = (index, id) => {
    if (formActivities.length > 0) {
      let filter = formIndicateurs.filter((el) => el.id !== index);

      for (let index = 0; index < filter.length; index++) {
        const element = filter[index];
        element.id = index;

        setFormIndicateurs(filter);
      }
    }

    if (formIndicateurs.length === 1) {
      setFormIndicateurs([{ id: 0 }]);
      setOptions([
        "HESTIA - Risque perte logement",
        "CVC",
        "HESTIA - Risque décès",
      ]);
    }
  };

  const sentRapport = (e) => {
    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];
    var formData = new FormData();

    let formIndicatorsGrouped = formIndicateurs.filter(
      (e) => e.selectedOptionType !== null && !opt.includes(e.id)
    );

    let arr = {};
    for (let index = 0; index < formIndicatorsGrouped.length; index++) {
      const element = formIndicatorsGrouped[index];
      if (element.indicateursFormCVC !== null) {
        arr.indicateursFormCVC = element.indicateursFormCVC;
      }
      if (element.indicateursFormHestiaRisqueDeces !== null) {
        arr.indicateursFormHestiaRisqueDeces =
          element.indicateursFormHestiaRisqueDeces;
      }
      if (element.indicateursEstLeLogement !== null) {
        arr.indicateursEstLeLogement = element.indicateursEstLeLogement;
      }
    }

    formData.append("activityType", 1);
    formData.append("contacts", contacts);
    formData.append("changeTypeMeet", changeTypeMeet);
    formData.append("changeDate", changeDate);
    formData.append("changeGoals", changeGoals);
    formData.append("contId", changeContacts);
    formData.append("changePlaces", changePlaces);
    formData.append("changeEditor", changeEditor);
    formData.append("goalsInput", goalsInput);
    formData.append("meetType", 1);
    formData.append(
      "formSoins",
      JSON.stringify(formSoins) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formSoins)
    );
    formData.append(
      "formActivities",
      JSON.stringify(formActivities) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formActivities)
    );
    formData.append(
      "formIndicateurs",
      JSON.stringify(formIndicatorsGrouped) === JSON.stringify([{ id: 0 }])
        ? null
        : JSON.stringify(formIndicatorsGrouped)
    );
    formData.append("userId", userId);
    formData.append("patiId", patiId);
    let validationFormActivities = null;
    let validationFormCare = null;

    console.log(formActivities);
    validationFormActivities =
      (JSON.stringify(formActivities) !== JSON.stringify([{ id: 0 }]) &&
        formActivities.every(
          (e) => e.type !== null && e.description !== null
        )) ||
      JSON.stringify(formActivities) === JSON.stringify([{ id: 0 }])
        ? null
        : false;

    validationFormCare =
      (JSON.stringify(formSoins) !== JSON.stringify([{ id: 0 }]) &&
        formSoins.every((e) => e.value !== null && e.description !== null)) ||
      JSON.stringify(formSoins) === JSON.stringify([{ id: 0 }])
        ? null
        : false;

    let validationFormHESTIALogement = null;
    let validationFormHESTIAdeces = null;
    let validationFormCVC = null;

    if (formIndicatorsGrouped.length > 0) {
      for (let index = 0; index < formIndicatorsGrouped.length; index++) {
        const element = formIndicatorsGrouped[index];
        if (element.selectedOptionType === "HESTIA - Risque perte logement") {
          validationFormHESTIALogement = element.indicateursEstLeLogement.every(
            (e) =>
              e.bailleurSelected !== null &&
              e.hygieneSelected !== null &&
              e.voisinageSelected !== null
          );
        }

        if (element.selectedOptionType === "CVC") {
          validationFormHESTIAdeces = element.indicateursFormCVC.every(
            (e) =>
              e.corpsScore !== null &&
              e.vetementsScore !== null &&
              e.comportementScore !== null
          );
        }

        if (element.selectedOptionType === "HESTIA - Risque décès") {
          validationFormCVC = element.indicateursFormHestiaRisqueDeces.every(
            (e) =>
              e.valueConsommation !== null &&
              e.valueSantee !== null &&
              e.valueSecuritee !== null
          );
        }
      }
    }

    console.log("validationFormActivities", validationFormActivities);
    console.log("validationFormCare", validationFormCare);
    console.log("validationFormHESTIALogement", validationFormHESTIALogement);
    console.log("validationFormHESTIAdeces", validationFormHESTIAdeces);
    console.log("validationFormCVC", validationFormCVC);
    // formSoins.every((item) => item.type !== null && item.description !== null);
    // formActivities.every((item) => item.type !== null && item.description !== null);
    if (
      validationFormActivities === null &&
      validationFormCare === null &&
      (validationFormHESTIALogement === true ||
        validationFormHESTIALogement === null) &&
      (validationFormHESTIAdeces === true || validationFormHESTIAdeces === null)
    ) {
      axios({
        method: "post",
        url: "/api/sendReport",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.auth.accessToken}`,
        },
      })
        .then(function (response) {
          if (response && formSoins) {
            let endpoints = [];

            for (let index = 0; index < formSoins.length; index++) {
              endpoints.push("/api/addCaresToReport");
            }

            axios
              .all(
                endpoints.map((endpoint, i) => {
                  let care = formSoins[i];
                  let formData = new FormData();

                  formData.append(
                    "rapportId",
                    response.data.id ? response.data.id : null
                  );
                  formData.append("value", care.value ? care.value : null);
                  formData.append(
                    "description",
                    care.description ? care.description : null
                  );
                  formData.append("formSoins", JSON.stringify(care));

                  axios({
                    method: "post",
                    url: endpoint,
                    data: formData,
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${auth.auth.accessToken}`,
                    },
                  });
                })
              )
              .then((data) => console.log(data));
          }

          if (response && formActivities) {
            let endpoints = [];

            for (let index = 0; index < formActivities.length; index++) {
              endpoints.push("/api/addActivitiesToReport");
            }
            axios
              .all(
                endpoints.map((endpoint, i) => {
                  let activities = formActivities[i];
                  let formData = new FormData();

                  formData.append(
                    "rapportId",
                    response.data.id ? response.data.id : null
                  );
                  formData.append(
                    "value",
                    activities.value ? activities.value : null
                  );
                  formData.append(
                    "description",
                    activities.description ? activities.description : null
                  );
                  formData.append("formActivities", JSON.stringify(activities));

                  axios({
                    method: "post",
                    url: endpoint,
                    data: formData,
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${auth.auth.accessToken}`,
                    },
                  });
                })
              )
              .then((data) => console.log(data));
          }

          if (response && formIndicateurs) {
            for (let index = 0; index < formIndicateurs.length; index++) {
              let indi = formIndicateurs[index];
              formIndicateurs[index].rapportId = response.idRapport;
              let formData = new FormData();

              formData.append(
                "rapportId",
                response.data.id ? response.data.id : null
              );

              formData.append("formIndicateurs", JSON.stringify(indi));
              axios({
                method: "post",
                url: "/api/addIndicators",
                data: formData,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${auth.auth.accessToken}`,
                },
              });
            }
          }
          // location.replace(window.location.origin + "/" + idPatient);
          document.getElementById("rapport_details-btn").click();
        })
        .catch(function (response) {
          console.log(response);
        });
    } else {
      setValidationCare(validationFormCare === false ? true : null);
      setValidationHESTIALogement(
        validationFormHESTIALogement === false ? true : null
      );
      setValidationHESTIADeces(
        validationFormHESTIAdeces === false ? true : null
      );
      setValidationCVC(validationFormCVC === false ? true : null);
      setValidationActivities(validationFormActivities === false ? true : null);
      console.log("validationFormCare", validationFormCare);
      console.log("validationFormHESTIALogement", validationFormHESTIALogement);
      console.log("validationFormHESTIAdeces", validationFormHESTIAdeces);
      console.log("validationFormCVC", validationFormCVC);
    }
  };

  function onChangeValuesByOnCareForm(e) {
    if (formSoins.filter((el) => e[0].id === el.id)) {
      formSoins.filter((el) => e[0].id === el.id)[0].type =
        e[0].value === undefined ? null : e[0].value;
      formSoins.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact === undefined ? null : e[0].contact;
      formSoins.filter((el) => e[0].id === el.id)[0].place =
        e[0].place === undefined ? null : e[0].place;
      formSoins.filter((el) => e[0].id === el.id)[0].description =
        e[0].description === undefined ? null : e[0].description;
    }
  }

  function onChangeValuesByActivitiesForm(e) {
    if (formActivities.filter((el) => e[0].id === el.id)) {
      formActivities.filter((el) => e[0].id === el.id)[0].type =
        e[0].value === undefined ? null : e[0].value;
      formActivities.filter((el) => e[0].id === el.id)[0].contact =
        e[0].contact === undefined ? null : e[0].contact;
      formActivities.filter((el) => e[0].id === el.id)[0].place =
        e[0].place === undefined ? null : e[0].place;
      formActivities.filter((el) => e[0].id === el.id)[0].description =
        e[0].description === undefined ? null : e[0].description;
    }
    console.log(formActivities);
  }

  const onChangeValuesIndicateursForm = (e) => {
    // setSelectedTypeCVC(e[0].selectedOptionType);

    let opt = [
      "HESTIA - Risque perte logement",
      "CVC",
      "HESTIA - Risque décès",
    ];
    for (let index = 0; index < formIndicateurs.length; index++) {
      const element = formIndicateurs[index];

      element.id = index;
    }
    if (
      formIndicateurs &&
      formIndicateurs?.filter((el) => e[0].id === el.id)[0] &&
      formIndicateurs?.filter((el) => e[0].id === el.id)[0]?.id !== null
    ) {
      formIndicateurs.filter((el) => e[0].id === el.id)[0].id = e[0].id;

      formIndicateurs.filter((el) => e[0].id === el.id)[0].selectedOptionType =
        e[0].selectedOptionType;
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
      e[0].selectedOptionType &&
      e[0].selectedOptionType !== null
    ) {
      //
      let test = formIndicateurs.filter(
        (e) => e.selectedOptionType !== null && !opt.includes(e.id)
      );

      let arr1 = [];

      for (let index = 0; index < formIndicateurs.length; index++) {
        const element = formIndicateurs[index];

        arr1.push(element.selectedOptionType);
      }
      let resultA = arr1.filter(
        (elm) =>
          !options
            .map((elm) => JSON.stringify(elm))
            .includes(JSON.stringify(elm))
      );

      // a diff b
      let resultB = opt.filter(
        (elm) =>
          !arr1.map((elm) => JSON.stringify(elm)).includes(JSON.stringify(elm))
      );

      // show merge

      options.splice(0, options.length);

      // if ([...resultA, ...resultB]) {
      options.push(...resultB);

      setOptions(options);
    }
  };

  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1 === object2;
      });
    });
  }

  function optUpdate(opt) {
    setOptions(opt);
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
              name="group26"
              type={"radio"}
              id={`inline-radio-21`}
            />
            <Form.Check
              inline
              label="Non"
              name="group26"
              defaultChecked="true"
              onClick={(e) => choiceSoins(false)}
              type={"radio"}
              id={`inline-radio-22`}
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
              name="group25"
              type={"radio"}
              id={`inline-radio-23`}
            />
            <Form.Check
              inline
              label="Non"
              defaultChecked="true"
              name="group25"
              onClick={(e) => choiceActivities(false)}
              type={"radio"}
              id={`inline-radio-24`}
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
              name="group24"
              type={"radio"}
              id={`inline-radio-25`}
            />
            <Form.Check
              inline
              label="Non"
              defaultChecked="true"
              name="group24"
              onClick={(e) => choiceIndicateurs(false)}
              type={"radio"}
              id={`inline-radio-26`}
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
                    key={idx}
                    id={idx}
                    form={form}
                    options={options}
                    formIndicateurs={formIndicateurs}
                    onChange={onChangeValuesIndicateursForm}
                    contacts={props.contacts}
                    places={props.places}
                  ></AddIndicateursByReport>
                  {(formIndicateurs[0].indicateursEstLeLogement !== null ||
                    formIndicateurs[0].indicateursFormCVC !== null ||
                    formIndicateurs[0].indicateursFormHestiaRisqueDeces !==
                      null) && (
                    <button
                      onClick={(e) =>
                        onClickDeleteIndicateursForm(idx, form.id)
                      }
                    >
                      Supprimer un autre soin
                    </button>
                  )}

                  {formIndicateurs && formIndicateurs.length < 3 && (
                    <button
                      onClick={(e) =>
                        onClickAddIndicateurs({ id: formIndicateurs.length })
                      }
                    >
                      Ajouter un autre indicateur
                    </button>
                  )}
                </>
              ))}
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
          <option value={1}>Vu</option>
          <option value={2}>Rencontre</option>
          <option value={3}>Repos</option>
          <option value={4}>Recherche</option>
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

      {validationCare && <p>validationCare</p>}
      {validationHestiaLogement && <p>validationHestiaLogement</p>}
      {validationHESTIADeces && <p>validationHESTIADeces</p>}
      {validationCVC && <p>validationCVC</p>}
      {validationActivities && <p>validationActivities</p>}
      <button onClick={(e) => sentRapport(e)}>Envoyer</button>
    </div>
  );
}

export default AddReportMeet;
