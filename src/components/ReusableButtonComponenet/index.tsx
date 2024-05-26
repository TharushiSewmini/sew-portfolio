import React from "react";
import "./index.css";
import pdf from "../../assets/sewmini_2024.pdf"
const ReusableButton = () => {
  return (
    <div className="reusablebutton-container">
      <button className="reusable-button-c">
        <a href={pdf} download='sewmini_2024.pdf' className="reusable-btn-cv-download"> Download CV</a>
      </button>
    </div>
  );
};

export default ReusableButton;
