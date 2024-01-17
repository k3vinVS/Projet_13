import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import "../styles/header.css";

const Header = () => {
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
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
};

export default Header;