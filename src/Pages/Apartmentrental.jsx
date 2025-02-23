import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/sass/Pages/Apartmentrental.scss";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Apartment_Head from "../components/Apartment_Head";
import ErrorPage from "../Pages/ErrorPage";
import logementsData from "../data/logements.json"; // Importation directe des données

function Apartmentrental() {
  const { id } = useParams(); // Récupération de l'ID de l'appartement depuis l'URL
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const apartment = logementsData.find((card) => card.id === id); // Recherche de l'appartement par ID
      if (!apartment) {
        navigate("/error"); // Redirige vers la page d'erreur si l'appartement n'est pas trouvé
      } else {
        setSelectedCards(apartment); // Définit l'appartement sélectionné
      }
    } else {
      setError("No apartment ID provided");
      setIsLoading(false);
    }
    setIsLoading(false); // Fin du chargement
  }, [id, navigate]);

  if (isLoading) return <div>Loading...</div>; // Affiche un message de chargement
  if (error) return <ErrorPage />; // Affiche la page d'erreur si une erreur est survenue
  if (!selectedCards) return <div>No apartment data found</div>; // Affiche un message si aucune donnée n'est trouvée

  return (
      <div className="Apartment-rental">
        <Carousel pictures={selectedCards.pictures} /> {/* Affiche le carrousel d'images */}
        <Apartment_Head selectedCards={selectedCards} /> {/* Affiche les détails de l'appartement */}
        <div className="ADarea">
          <Collapse
              title="Description"
              content={selectedCards.description} // Affiche la description de l'appartement
              className="collapse-apartment"
          />
          <Collapse
              title="Équipements"
              content={
                <ul>
                  {selectedCards.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li> // Affiche la liste des équipements
                  ))}
                </ul>
              }
              className="collapse-apartment"
          />
        </div>
      </div>
  );
}

export default Apartmentrental;