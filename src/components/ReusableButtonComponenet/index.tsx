import React from "react";
import "./index.css";
import pdf from "../../assets/tharushi_sewmini.pdf";
const ReusableButton = () => {
  return (
    <div className="reusablebutton-container">
      <button className="reusable-button-c">
        <a
          href={pdf}
          download="tharushi sewmini Curriculum vitae"
          className="reusable-btn-cv-download"
        >
          {" "}
          Download CV
        </a>
      </button>
    </div>
  );
};

export default ReusableButton;
