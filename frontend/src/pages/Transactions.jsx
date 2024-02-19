import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Transaction from "../components/Transaction";
// import { useSelector } from "react-redux";

// DATA TRANSACTION -----
import { transactionsContent } from "../mocks/data.js";

// Styles -----
import "../styles/transactionsPage.css";
import "../styles/transactionComponent.css";
import "../index.css";
import Footer from "../components/Footer.jsx";
// import { useSelector } from "react-redux";

export default function Transactions() {
  const [transactionContent, setTransactionContent] = useState([]);
  const [formData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    setTransactionContent(transactionsContent);
  }, []);

  return (
    <div className="container">
      <Header formData={formData} />
      <main className="bg-dark">
        <div className="account-header">
          <span className="account-header-container">
            <p className="account-checking">Argent Bank Checking (x8349)</p>
            <h1 className="account-content">$2,082.79</h1>
            <p className="account-balance">Available Balance</p>
          </span>
        </div>
        <div className="account-transaction">
          <div className="account-transaction-container">
            <div className="account-transaction-title">Date</div>
            <div className="account-transaction-title">Description</div>
            <div className="account-transaction-title">Amount</div>
            <div className="account-transaction-title">Balance</div>
          </div>
          {transactionContent.map((content, index) => (
            <Transaction
              key={index}
              date={content.date}
              description={content.description}
              amount={content.amount}
              balance={content.balance}
              type={content.type}
              category={content.category}
              notes={content.notes}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
