import React from "react";

function IndicateursActivitiesDescription({
  group,
  name,
  value,
  description,
  ...props
}) {
  let comment;

  if (group === 3) {
    // HESTIA - Risque décès
    if (name === "Sécurité") {
      if (value === 0) {
        comment = "Le logement est insalubre ET mal utilisé par la personne";
      } else if (value === 1) {
        comment = "Le logement est insalubre OU mal utilisé par la personne";
      } else if (value === 2) {
        comment =
          "Le logement est bien utilisé par la personne mais seulement partiellement sain et fonctionnel";
      } else if (value === 3) {
        comment =
          "Le logement est sain et totalement fonctionnel et la personne l'utilise correctement";
      }
    } else if (name === "Santé") {
      if (value === 0) {
        comment =
          "La personne refuse les soins, ne prend pas son traitement et n’a aucun contact extérieur (porte fermée)";
      } else if (value === 1) {
        comment =
          "La personne accepte le contact mais refuse les soins et ne prend pas son traitement";
      } else if (value === 2) {
        comment =
          "La personne accepte le contact, accepte certains soins ou prend son traitement mais pas suffisamment régulièrement pour se maintenir en bonne santé";
      } else if (value === 3) {
        comment =
          "La personne a un bon lien avec son médecin traitant et/ou infirmière à domicile ou est autonome dans sa prise de traitement";
      }
    } else if (name === "Consommation") {
      if (value === 0) {
        comment =
          "La personne a une ou plusieurs dépendances et ne gère pas du tout : elle consomme massivement et se met en danger (ne se rend pas compte du problème)";
      } else if (value === 1) {
        comment =
          "La personne a une ou plusieurs dépendances, en a conscience mais n'est pas prête ou n'a pas envie d'envisager un changement";
      } else if (value === 2) {
        comment =
          "La personne a une ou plusieurs dépendances mais elle la/les gère et cela ne pose pas de problème majeur d'un point de vue de sa santé/sécurité ou ne les gère pas mais est prête à modifier sa consommation";
      } else if (value === 3) {
        comment = "Absence totale de consommation(s) - Abstinence";
      }
    }
  } else if (group === 2) {
    // HESTIA - Risque perte logement
    if (name === "Voisinage") {
      if (value === 0) {
        comment = "Conflits de voisinage";
      } else if (value === 1) {
        comment = "Conflits de voisinage mais gérés";
      } else if (value === 2) {
        comment = "Absence de conflits de voisinage";
      } else if (value === 3) {
        comment = "Bonne entente avec le voisinage";
      }
    } else if (name === "Hygiène logement") {
      if (value === 0) {
        comment =
          "Si cumule au moins 2 éléments : Présence d’odeurs nauséabondes, nuisibles, altération du matériel, accumulation";
      } else if (value === 1) {
        comment =
          "Présence d’odeurs nauséabondes OU nuisibles OU altération du matériel OU accumulation";
      } else if (value === 2) {
        comment =
          "Logement relativement propre et entretenu mais pas impeccable ou aides familiales limitées";
      } else if (value === 3) {
        comment =
          "Logement impeccable et/ou aides familiales régulières et fonctionnelles";
      }
    } else if (name === "Bailleur") {
      if (value === 0) {
        comment = "Absence de paiement du loyer";
      } else if (value === 1) {
        comment =
          "La personne paie son loyer mais aucune garantie de régularité ou de manière erronée";
      } else if (value === 2) {
        comment =
          "Quelqu’un est garant du paiement du loyer mais personne n’est garant de la signature des baux";
      } else if (value === 3) {
        comment = "Garantie du paiement du loyer et de la signature des baux";
      }
    }
  } else if (group === 1) {
    // CVC
    if (name === "Corps") {
      if (value === 0) {
        comment =
          "Saleté apparente avec parasites OU saleté apparente avec odeurs";
      } else if (value === 1) {
        comment =
          "Saleté apparente OU parasites OU odeurs OU plaie non soignée";
      } else if (value === 2) {
        comment = "Négligence";
      } else if (value === 3) {
        comment = "Propre et soigné";
      }
    } else if (name === "Vêtements") {
      if (value === 0) {
        comment = "Sales, abîmés et malodorants";
      } else if (value === 1) {
        comment = "Sales et malodorants OU sales et abîmés OU inadaptés";
      } else if (value === 2) {
        comment = "Sales OU abîmés OU malodorants";
      } else if (value === 3) {
        comment = "Cohérents, propres et en bon état";
      }
    } else if (name === "Comportement") {
      if (value === 0) {
        comment = "Anormal et dangereux";
      } else if (value === 1) {
        comment = "Anormal OU dangereux";
      } else if (value === 2) {
        comment = "Suscite un questionnement";
      } else if (value === 3) {
        comment = "Normal";
      }
    }
  }

  return (
    <>
      <u>{name}</u> : {comment}
    </>
  );
}

export default IndicateursActivitiesDescription;
