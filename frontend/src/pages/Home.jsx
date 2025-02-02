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

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [formData] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    setFeatures(contentFeature);
  }, []);

  return (
    <div className="container">
      <Header formData={formData} />
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
