import React, { useEffect, useState } from "react";

// COMPONENTS -----
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";

// CONTENTS FOR COMPONENTS FEATURES -----
import { contentFeature } from "../mocks/data";

// STYLES -----
import "../index.css";
import "../styles/features.css";

const Home = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(contentFeature);
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Hero />
        <section className="features">
          {features.map((feature, index) => (
            <Features
              key={index}
              img={feature.image}
              title={feature.title}
              content={feature.content}
            />
          ))}

          {/* <Features
            // img={iconChat}
            img={contentFeature[0].image}
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
          /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
