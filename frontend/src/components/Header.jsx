import React from "react";
import { Link, useNavigate } from "react-router-dom";

// API'S FUNCTIONS -----
import { deleteUserStorage } from "../services/api";

// REDUX -----
import { useDispatch, useSelector } from "react-redux";
import { setUserDelete } from "../feature/userSlice";

// STYLES -----
import "../index.css";
import "../styles/header.css";
import logo from "../assets/argentBankLogo.png";

const Header = ({ formData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleDelete = (e) => {
    dispatch(setUserDelete());
    deleteUserStorage();
    navigate("/login");
  };

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
      {currentUser || formData ? (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {currentUser ? currentUser.firstName : formData.firstName}
          </Link>
          <Link to="/login" className="main-nav-item" onClick={handleDelete}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
