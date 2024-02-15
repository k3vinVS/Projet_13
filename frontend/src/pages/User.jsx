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
import { useDispatch, useSelector } from "react-redux";
import UserNameChange from "../components/UserNameChange";
import {
  setUserStart,
  setUserData,
  setUserFailure,
} from "../feature/userSlice";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [usersContent, setUsersContent] = useState([]);
  const [userChange, setUserChange] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(formData);
  // console.log(currentUser);

  useEffect(() => {
    setUsersContent(amountContent);
    dispatch(setUserData(formData));
    if (!formData) {
      navigate("/user/login");
    }
  }, [dispatch, navigate, formData]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    dispatch(setUserData(formData));
    setUserChange(false);
    console.log("Update successfully", formData);
    return formData;
  };

  return (
    <div className="container">
      <Header />
      {currentUser !== null ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {currentUser.firstName} {currentUser.lastName}!
            </h1>
            <div>
              {userChange ? (
                <form onSubmit={handleSubmit}>
                  <UserNameChange
                    currentUser={currentUser}
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
