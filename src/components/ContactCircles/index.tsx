import React from "react";
import "./index.css";
import { link } from "fs";

interface ContactCircleProps {
  imagePath: string;
  linkAddress : string
}
const ContactCircle = ({ imagePath  , linkAddress}: ContactCircleProps) => {
  return (
    <div className="contact-circle">
       <a
          href={linkAddress}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-circle-link"
        >
      <img src={imagePath} alt="" className="social-image-for-contact"/>
       
  
      </a>
    </div>
  );
};

export default ContactCircle;
