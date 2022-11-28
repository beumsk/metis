import React, { useContext, useDebugValue, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../../component/Menu";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Form from "react-bootstrap/Form";

const Statistiques = () => {
  let id = useParams().id;
  let backgroundImage =
    "../images/5a94e34b4c36e28de4e704f8c2d1c39a79e91b5d.png";
  const [auth, setAuth] = useState(useAuth());
  const [resultCsv, setResultCSV] = useState(null);
  const [statValue, setStatsValue] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  let objPatient = {};

  useEffect(() => {}, []);

  function exportCSV() {
    console.log(statValue);
    let request = "/api/statistiques" + statValue;

    axios({
      method: "get",
      url: request,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.auth.accessToken}`,
      },
    })
      .then(function (response) {
        setResultCSV(response.data);
        if (response.data) {
          jsonToCsv(response.data);
        }
        exportFile();
      })
      .catch(function (response) {});
  }

  function jsonToCsv(items) {
    console.log(items);
    const header = Object.keys(items[0]);

    const headerString = header.join(",");

    const replacer = (key, value) => value ?? "";

    const rowItems = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );

    let csv = [headerString, ...rowItems].join("\r\n");

    console.log(csv);

    if (csv) {
      // document.write(csv);

      var hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf8," + encodeURI(csv);
      hiddenElement.target = "_blank";

      hiddenElement.download = "test.csv";
      hiddenElement.click();
    }
  }

  return (
    <>
      <Menu></Menu>
      Statistiques
      <Form.Select
        size="lg"
        value={statValue}
        onChange={(e) => setStatsValue(e.target.value)}
      >
        <option>Selectionner un stat</option>
        <option value={1}>Stats1</option>
        <option value={2}>Stats2</option>
        <option value={3}>Stats3</option>
        <option value={4}>Liste de personnes décédés sans date mises</option>
        <option value={5}>Lister les patients ayant 2 états simultanés</option>
        <option value={6}>Nombre de status part patients</option>
        <option value={7}>patients without status at reference date</option>
        <option value={8}>patients without team at reference date</option>
        <option value={9}>patients without birthdate</option>
        <option value={10}>
          Nombre de patients suivi par l'équipe rue au cours de la periode de
          reference, en suivi ou pre-suivi actif, ayant une pathologie physique
          chronique (inclus assuetude) et pour qui au moins une rencontre a été
          réalisée dans la période de reference
        </option>
        <option value={11}>
          Nombre de patients suivi par l'équipe rue au cours de la periode de
          reference, en suivi ou pre-suivi actif, ayant une pathologie physique
          chronique (inclus assuetude) et pour qui au moins une rencontre a été
          réalisée dans la période de reference
        </option>
        <option value={12}>
          Nombre de patients suivi par l'équipe rue au cours de la periode de
          reference, en suivi ou pre-suivi actif, ayant une pathologie physique
          chronique (inclus assuetude) mais une rencontre n'a pas été forcement
          réalisée dans la période de reference
        </option>
        <option value={13}>
          Nombre de patients suivi par l'équipe rue au cours de la periode de
          reference, en suivi ou pre-suivi actif, ayant une pathologie physique
          chronique (inclus assuetude) mais une rencontre n'a pas été forcement
          réalisée dans la période de reference - liste nominative
        </option>
        <option value={14}>Nouveaux signalements encodés</option>
        <option value={15}>
          Nouveaux signalements encodés - Liste nominative
        </option>
        <option value={16}>Nouveaux pré-suivis actifs encodes</option>
        <option value={17}>
          Nouveaux pré-suivis actifs encodes - liste nominative
        </option>
        <option value={18}>
          Nombre de nouveaux suivis au cours de l’année
        </option>
        <option value={19}>
          Nombre de nouveaux suivis au cours de l’année - liste nominative
        </option>
        <option value={20}>
          Nombre de personnes passées par le suivi en cours d année
        </option>
        <option value={21}>
          Nombre de personnes passées par le suivi en cours d’année - liste
          nominative
        </option>
        <option value={22}>
          Nombre de personnes passées par le post-suivi en cours d’année
        </option>
        <option value={23}>
          Nombre de personnes passées par le post-suivi en cours d'année - liste
          nominative
        </option>
        <option value={24}>
          Nombre total de personnes signalées, en pré-suivi actif, suivi et
          post-suivi
        </option>
        <option value={25}>
          Tableau 1.E. - Nombre total de personnes signalées, en pré-suivi
          actif, suivi et post-suivi - liste nominative
        </option>
        <option value={26}>
          Tableau 1.F/G. – Nombre de nouveaux patients Housing First au cours de
          l’année
        </option>
        <option value={27}>
          Tableau 1.F/G. – Nombre de nouveaux patients Housing First au cours de
          l’année - liste nominative
        </option>

        <option value={28}>
          Tableau 1.H. – Nombre total de patients Housing First et Housing Fast
        </option>
        <option value={29}>
          Tableau 1.H. – Nombre total de patients Housing First et Housing Fast
          - liste nominative
        </option>
        <option value={30}>
          Tableau 1.I. – Nombre total de patients selon l’équipe de suivi
        </option>
        <option value={31}>
          Tableau 1.I. – Nombre total de patients selon l’équipe de suivi -
          liste nominative
        </option>
        <option value={32}>
          TABLEAU 2A-1 : Nombre de rencontres/appels effectués avec les patients
          selon leur statut
        </option>
        <option value={33}>
          TABLEAU 2A-2 : Nombre d’activités effectuées avec les patients selon
          leur statut
        </option>
        <option value={34}>
          TABLEAU 2B-1 : Nombre de rencontres/appels effectués avec les patients
          selon l’équipe de suivi
        </option>
        <option value={35}>
          TABLEAU 2B-2 : Nombre d’activités effectuées avec les patients selon
          l’équipe de suivi
        </option>
        <option value={36}>
          TABLEAU 2B-2 : Nombre d’activités effectuées avec les patients selon
          l’équipe de suivi - liste nominative et activites detaillees
        </option>
        <option value={37}>
          TABLEAU 2B-3 : nombre de patients pour qui un accompagnement a été
          effectué selon l’équipe de suivi - accompagnements uniquement
        </option>
        <option value={38}>
          TABLEAU 2B-X :liste nominative des patients pour qui un accompagnement
          a été effectué selon l’équipe de suivi - liste nominative et activites
          detaillees - accompagnements uniquement
        </option>
        <option value={39}>
          TABLEAU 2C-1 : Nombre de rencontres/appels effectués avec les patients
          selon l’équipe de suivi
        </option>
        <option value={40}>
          TABLEAU 2C-2 : Nombre d’activités effectuées avec les patients selon
          le programme de logement
        </option>
        <option value={41}>
          TABLEAU 2D : Durée totale et moyenne des activités effectuées avec les
          patients selon leur statut
        </option>
        <option value={42}>
          TABLEAU 2E : Durée totale et moyenne des activités effectuées avec les
          patients selon l’équipe de suivi
        </option>
        <option value={43}>
          TABLEAU 2F : Durée totale et moyenne des activités effectuées avec les
          patients selon le programme de logement
        </option>
        <option value={44}>
          TABLEAU 3A : Nombre de démarches effectuées pour les patients selon
          leur statut
        </option>
        <option value={45}>
          TABLEAU 3B : Nombre de démarches effectuées pour les patients selon
          l’équipe de suivi
        </option>
        <option value={46}>
          TABLEAU 3C : Nombre de démarches effectuées pour les patients selon le
          programme de logement
        </option>
        <option value={47}>
          TABLEAU 3D : Durée totale et moyenne des démarches effectuées pour les
          patients selon leur statut
        </option>
        <option value={48}>
          TABLEAU 3E : Durée totale et moyenne des démarches effectuées pour les
          patients selon l’équipe de suivi
        </option>

        <option value={49}>
          TABLEAU 3F : Durée totale et moyenne démarches effectuées pour les
          patients selon le programme de logement
        </option>

        <option value={50}>
          TABLEAU 4 : LES 20 PATIENTS QUI ONT DEMANDE LE PLUS D’ATTENTION
        </option>
        <option value={51}>TABLEAU 4B : ACTIVITES PAR PATIENT</option>
        <option value={52}>
          Tableau 5 : Répartition des activités et démarches au cours de l’année
          Tableau 5.A-1 – Répartition des activités
        </option>
        <option value={53}>Tableau 5.A-2 – Répartition des activités</option>
        <option value={54}>Tableau 5.B. – Répartition des démarches</option>
        <option value={55}>
          Tableau 9.A : Personnes totales en logement durable
        </option>
        <option value={56}>
          Tableau 9.B : Personnes totales en logement durable 2006 par programme
        </option>
        <option value={57}>
          Tableau 9.A/B : Personnes totales en logement durable par programme -
          liste nominative
        </option>
        <option value={58}>
          Tableau 9.B.2 : Personnes totales en logement durable année en cours
          par programme - liste nominative
        </option>
        <option value={59}>
          TABLEAU 11 : PERSONNES STABILISEES EN LOGEMENT Tableau 11.A. –
          Personnes passées en post-suivi en cours d’année
        </option>
        <option value={60}>
          Tableau 11.A. – Personnes passées en post-suivi en cours d’année -
          liste nominative
        </option>
        <option value={61}>
          Tableau 11.B. – Total des personnes dans le post-suivi
        </option>
        <option value={62}>
          Tableau 11.B. – Total des personnes dans le post-suivi - liste
          nominative
        </option>
        <option value={63}>
          TABLEAU 22 : NATIONALITES DE NOS PATIENTS Tableau 22.A. - Données
          chiffrées sur toutes les nationalités
        </option>
        <option value={64}>
          Tableau 22.A. - Données chiffrées sur toutes les nationalités - liste
          nominative
        </option>
        <option value={65}>
          Tableau 22.B. - Pourcentages de nationalités belges et étrangères
        </option>
      </Form.Select>
      <a onClick={exportCSV}>export</a>
    </>
  );
};

export default Statistiques;
