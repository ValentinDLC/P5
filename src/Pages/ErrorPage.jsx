import React from "react";
import "../assets/sass/Pages/ErrorPage.scss";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Error from "../assets/images/404.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Header />
      <Main>
        <div className="notfound">
          <img src={Error} alt="Erreur 404" />
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retournez sur la page d'acceuil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage;
