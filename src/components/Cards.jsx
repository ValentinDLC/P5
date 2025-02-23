import React, { useState } from "react";
import { Link } from "react-router-dom";
import logementsData from "../Data/logements.json"; // Importation directe des données
import "../assets/sass/Components/Cards.scss";

function Cards() {
  const [apartments] = useState(logementsData); // Initialisation directe avec les données

  return (
      <div className="grid">
        {apartments.map((apartment) => (
            <Link
                key={apartment.id}
                to={`/apartment/${apartment.id}`} // Lien vers la page de l'appartement
                className="location"
            >
              <img src={apartment.cover} alt={apartment.title} />
              <div className="apartment_subtitle">{apartment.title}</div>
            </Link>
        ))}
      </div>
  );
}

export default Cards;