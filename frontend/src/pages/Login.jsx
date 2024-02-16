import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// REDUX -----
import { useDispatch, useSelector } from "react-redux";
import {
  setUserStart,
  setUserData,
  setUserFailure,
} from "../feature/userSlice";

// COMPONENTS -----
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";

// STYLES -----
import "../index.css";
import "../styles/login.css";
import { getUserProfile } from "../services/api";
import { getUserToken } from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setUserStart());
      const userTokenData = await getUserToken(formData);

      const userData = await getUserProfile(userTokenData);
      dispatch(setUserData(userData));

      navigate("/user/profile/");
    } catch (error) {
      dispatch(setUserFailure(error.message));
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputForm
              className="input-wrapper"
              htmlFor="username"
              content="Username"
              type="text"
              id="email"
              handleChange={handleChange}
            />
            <InputForm
              className="input-wrapper"
              htmlFor="password"
              content="Password"
              type="password"
              id="password"
              handleChange={handleChange}
            />
            <InputForm
              className="input-remember"
              htmlFor="remember-me"
              content="Remember me"
              type="checkbox"
              id="remember-me"
            />
            {/* <Link to="/user/profile" className="sign-in-button">
              Sign In
            </Link> */}
            {/* <Link>
              <button
                className="sign-in-button"
                onSubmit={(e) => handleSubmit(e)}
              >
                Sign In
              </button>
            </Link> */}
            <button disabled={loading} className="sign-in-button" type="submit">
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
