import React from "react";
import { Link } from "react-router-dom";

// STYLES -----
import "../styles/accountWrapper.css";

const AccountWrapper = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <Link to="/user/transactions" className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </Link>
    </section>
  );
};

export default AccountWrapper;
