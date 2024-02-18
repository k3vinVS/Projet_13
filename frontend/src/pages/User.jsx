import React, { useEffect, useState } from "react";

// COMPONENTS -----
import Header from "../components/Header";
import AccountWrapper from "../components/AccountWrapper";
import Footer from "../components/Footer";

// CONTENTS FOR COMPONENTS FEATURES -----
import { amountContent } from "../mocks/data.js";
// import { getUserProfile } from "../services/api";
import { updateUserName } from "../services/api";

// STYLES -----
import "../index.css";
import "../styles/user.css";
import "../styles/accountWrapper.css";
import { useDispatch, useSelector } from "react-redux";
import UserNameChange from "../components/UserNameChange";
import {
  // setUserStart,
  setUserData,
  // setUserFailure,
} from "../feature/userSlice";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [usersContent, setUsersContent] = useState([]);
  const [userChange, setUserChange] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  // const currentUser = useSelector((state) => state.user);
  // const [userName, setUserName] = useState({
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  // });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(formData);

  useEffect(() => {
    // DATA USER ACCOUNT -----
    setUsersContent(amountContent);

    // USER DATA -----
    dispatch(setUserData(formData));

    // IF USER DATA IS UNDEFINED, GO TO THE SIGN-IN PAGE -----
    if (!formData) {
      navigate("/user/login");
    }
  }, [dispatch, navigate, formData]);

  const handleChange = async (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));
    dispatch(setUserData(formData));
    updateUserName(formData);
    setUserChange(false);
    alert("Update UserName successfully");
    console.log("Update UserName successfully", formData);
    return formData;
  };

  return (
    <div className="container">
      <Header formData={formData} />
      {formData ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {formData.firstName} {formData.lastName}!
            </h1>
            <div>
              {userChange ? (
                <form onSubmit={handleSubmit}>
                  <UserNameChange
                    formData={formData}
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
