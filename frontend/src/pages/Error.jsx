import React from "react";
import { NavLink } from "react-router-dom";

// STYLES -----
import "../styles/error.css";

const Error = () => {
  return (
    <div>
      <div className="error-container">
        <h1>Oups...! </h1>
        <h2>Il semblerait que la page que vous cherchez n'existe pas.</h2>
        <NavLink to="/" className="lien-retour">
          Retour à la page d'accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
