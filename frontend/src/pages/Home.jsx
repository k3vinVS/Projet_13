import React from "react";

// COMPONENTS -----
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";

// ICONS FOR COMPONENTS FEATURES -----
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

// CONTENTS FOR COMPONENTS FEATURES -----
import { contentFeature } from "../mocks/data";

// STYLES -----
import "../index.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
        <section className="features">
          <Features
            img={iconChat}
            title={contentFeature[0].title}
            content={contentFeature[0].content}
          />
          <Features
            img={iconMoney}
            title={contentFeature[1].title}
            content={contentFeature[1].content}
          />
          <Features
            img={iconSecurity}
            title={contentFeature[2].title}
            content={contentFeature[2].content}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
