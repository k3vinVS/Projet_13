import React from "react";
import "../styles/features.css";

const Features = ({ img, title, content }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="Chat icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Features;
