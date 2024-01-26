import React, { useEffect, useState } from "react";

// COMPONENTS -----
import Header from "../components/Header";
import AccountWrapper from "../components/AccountWrapper";
import Footer from "../components/Footer";

// CONTENTS FOR COMPONENTS FEATURES -----
import { amountContent } from "../mocks/data";

// STYLES -----
import "../index.css";
import "../styles/user.css";
import "../styles/accountWrapper.css";

const User = () => {
  const [usersContent, setUsersContent] = useState([]);

  useEffect(() => {
    setUsersContent(amountContent);
  }, []);
  return (
    <div className="container">
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {usersContent.map((content, index) => (
          <AccountWrapper
            key={index}
            title={content.title}
            amount={content.amount}
            description={content.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default User;
