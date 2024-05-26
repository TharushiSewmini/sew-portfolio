import React from "react";
import "./index.css";


interface ContactCircleProps {
  imagePath: string;
}
const ContactCircle = ({ imagePath }: ContactCircleProps) => {
  return (
    <div className="contact-circle">
      <img src={imagePath} alt="" className="social-image-for-contact" />
    </div>
  );
};

export default ContactCircle;
