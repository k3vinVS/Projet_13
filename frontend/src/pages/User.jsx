import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// API'S FUNCTIONS -----
import { updateUserName } from "../services/api";

// REDUX -----
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../feature/userSlice";

// COMPONENTS -----
import Header from "../components/Header";
import AccountWrapper from "../components/AccountWrapper";
import UserNameChange from "../components/UserNameChange";
import Footer from "../components/Footer";

// CONTENTS FOR COMPONENTS FEATURES -----
import { amountContent } from "../mocks/data.js";

// STYLES -----
import "../index.css";
import "../styles/user.css";

const User = () => {
  const [usersContent, setUsersContent] = useState([]);
  const [userChange, setUserChange] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const { currentUser, rememberMe } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // DATA USER ACCOUNT -----
    setUsersContent(amountContent);

    // USER DATA -----
    dispatch(setUserData(currentUser));

    // IF USER DATA FROM THE STORE IS UNDEFINED, GO TO THE SIGN-IN PAGE -----
    if (formData) {
      navigate("/user");
    } else if (!currentUser) {
      navigate("/login");
    }
  }, [dispatch, navigate, currentUser, formData]);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...currentUser,
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("userData", JSON.stringify(formData));
    }
    dispatch(setUserData(formData));
    updateUserName(formData);
    setUserChange(false);
    alert("Update UserName successfully");
    console.log("Update UserName successfully", formData);
    return { currentUser, formData };
  };

  return (
    <div className="container">
      <Header formData={currentUser || formData} />
      {currentUser || formData ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {currentUser
                ? `${currentUser.firstName} ${currentUser.lastName}`
                : `${formData.firstName} ${formData.lastName}`}
              !
            </h1>
            <div>
              {userChange ? (
                <form onSubmit={handleSubmit}>
                  <UserNameChange
                    formData={currentUser ? currentUser : formData}
                    setUserChange={setUserChange}
                    handleChange={handleChange}
                  />
                </form>
              ) : (
                <button
                  className="edit-button"
                  onClick={() => setUserChange(true)}
                >
                  Edit Name
                </button>
              )}
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
          </div>
        </main>
      ) : null}
      <Footer />
    </div>
  );
};

export default User;
