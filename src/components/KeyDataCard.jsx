import React from "react";

// Images
import fireIcon from "../assets/svg/calorie.svg";
import chickenLegIcon from "../assets/svg/protein.svg";
import appleIcon from "../assets/svg/carbohydrate.svg";
import burgerIcon from "../assets/svg/lipid.svg";

// Utils
import {
  splitString,
  splitOnUpperCase,
  formatText,
  numberSeparatorLocale,
} from "../react-utils/functions/helperFunctions";

export default function KeyDataCard({ dataType, keyCardData }) {
  // Formater la classe CSS
  const formattedClass = splitOnUpperCase(dataType);

  // Définir l'unité de mesure
  const unit = dataType === "calorieCount" ? "kCal" : "g";

  // Récupérer le nom du type formaté
  let nameOfType = splitString(formattedClass, "-")[0];
  nameOfType = formatText(nameOfType, "titlecase");

  // Récupérer et formater la valeur
  const value = keyCardData?.[dataType];
  const formattedValue = numberSeparatorLocale(value);
  const typeValue = `${formattedValue}${unit}`;

  // Associer l'icône correspondante
  const icons = {
    Calorie: fireIcon,
    Protein: chickenLegIcon,
    Carbohydrate: appleIcon,
    Lipid: burgerIcon,
  };

  const svgIcon = icons[nameOfType];

  return (
    <section className="key-data-card">
      <div
        className={`key-data-card__image-container key-data-card__image-container--${formattedClass}`}
      >
        <img src={svgIcon} alt="" className="key-data-card__image" width={40} height={40} />
      </div>
      <div className="key-data-card__text-container">
        <h2 className="key-data-card__count">{typeValue}</h2>
        <p className="key-data-card__count-type">{nameOfType + "s"}</p>
      </div>
    </section>
  );
}
