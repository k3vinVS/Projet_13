import React, { useRef } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

// REDUX -----
import { useDispatch } from "react-redux";
import { setUserData } from "../feature/userSlice";

// COMPONENTS -----
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";

// STYLES -----
import "../index.css";
import "../styles/login.css";

const Login = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    };
    console.log(userData);
    try {
      const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }

    // await axios
    //   .post("http://localhost:3001/api/v1/user/login", userData)
    //   .then(() => {
    //     dispatch(setUserData(userData));
    //     formRef.current.reset();
    //   });
  };

  return (
    <div className="container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
            <InputForm
              className="input-wrapper"
              htmlFor="username"
              content="Username"
              type="text"
              id="username"
            />
            <InputForm
              className="input-wrapper"
              htmlFor="password"
              content="Password"
              type="password"
              id="password"
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
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
