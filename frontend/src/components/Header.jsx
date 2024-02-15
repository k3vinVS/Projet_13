import React from "react";
import { Link } from "react-router-dom";
import { deleteUserStorage } from "../services/api";

// STYLES -----
import logo from "../assets/argentBankLogo.png";
import "../index.css";
import "../styles/header.css";

const Header = () => {
  const localWindow =
    window.location.href === "http://localhost:3000/user/profile/";

  return (
    <div className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {localWindow ? (
        <Link
          to="/user/login"
          className="main-nav-item"
          onClick={deleteUserStorage}
        >
          <i className="fa fa-user-circle"></i>
          Sign Out
        </Link>
      ) : (
        <Link to="/user/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
