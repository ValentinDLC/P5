import React from "react";
import "../../assets/sass/Pages/ErrorPage.scss";
import Header from "../../components/Header/Header";
import Main from "../../Layout/Main/Main";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Header />
      <Main>
        <div className="notfound">
          <img src="404.png" alt="Erreur 404" />
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retournez sur la page d'acceuil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage;
