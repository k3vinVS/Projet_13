import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS -----
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";

// STYLES -----
import "../index.css";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="container">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form action="">
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
            <Link to="/user" className="sign-in-button">
              Sign In
            </Link>
            {/* <Link>
              <button className="sign-in-button">Sign In</button>
            </Link> */}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
