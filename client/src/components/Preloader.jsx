// src/components/Preloader.jsx
import React from "react";
import "./Preloader.css"; // We'll add CSS in the next step
import loading_GIF from "../assets/loading_GIF.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loading_GIF} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Preloader;
