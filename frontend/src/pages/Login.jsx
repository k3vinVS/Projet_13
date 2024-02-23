import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// API'S FUNCTIONS -----
import { getUserProfile } from "../services/api";
import { getUserToken } from "../services/api";

// REDUX -----
import { useDispatch, useSelector } from "react-redux";
import {
  setUserStart,
  setUserData,
  setUserFailure,
  setUserStorage,
} from "../feature/userSlice";

// COMPONENTS -----
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";

// STYLES -----
import "../index.css";
import "../styles/login.css";

const Login = () => {
  const [formUserData, setFormUserData] = useState({});
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const userLocalStorage = localStorage.getItem("userData");
  const userInfos = JSON.parse(userLocalStorage);
  // console.log(userInfos);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormUserData({ ...formUserData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setUserStart());
      const userTokenData = await getUserToken(formUserData);
      const userData = await getUserProfile(userTokenData);
      dispatch(setUserData(userData));
      if (formUserData.rememberMe) {
        localStorage.setItem("userData", JSON.stringify(userData));
        dispatch(setUserStorage());
      }

      navigate("/user");
    } catch (error) {
      dispatch(setUserFailure(error.message));
    }
  };

  return (
    <div className="container">
      <Header formData={currentUser || userInfos} />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <InputForm
              className="input-wrapper"
              htmlFor="email"
              content="email"
              type="text"
              id="email"
              onChange={handleChange}
            />
            <InputForm
              className="input-wrapper"
              htmlFor="password"
              content="Password"
              type="password"
              id="password"
              onChange={handleChange}
            />
            <InputForm
              className="input-remember"
              htmlFor="rememberMe"
              content="RememberMe"
              type="checkbox"
              id="rememberMe"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className="sign-in-button"
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
