import React, { useState } from "react";
import "./index.css";
import myPic from "../../assets/new.png";
import ReusableButton from "../../components/ReusableButton";
import arrow from "../../assets/right.png";

import social from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import linkdin from "../../assets/linkedin.png";
import ContactCircle from "../../components/ContactCircles";
import DrawerComponent from "../../components/DrawerComponent";
const HomePage = () => {
  const [isExpand, setExpand] = useState(false);
  const chnagingState = () => {
    console.log("clicked");
    
    setExpand(!isExpand);
  };
  return (
    <div className="home-page-container">
      <div
        className="home-page-left-expand-mark"
        style={{
          display: isExpand ? "none" : "flex",
          
        }}
        onClick={chnagingState}
      >
        <img
          src={arrow}
          className="home-page-left-small-arrow-right"
         
          style={{
            display: "flex",
          }}
        />
      </div>
      {/* left */}
      {isExpand == true && (
        <DrawerComponent
          isExpand={isExpand}
          onClick={chnagingState}
        />
      )}
      {/* right */}
      <div className="home-page-right-big-container">
      <div className="home-page-image-c">
          <img src={myPic} alt="" className="home-page-right-big-c-image-c" />
        </div>
        <div className="home-page-right-big-c-details">
          <div className="home-page-details-hello">Hello . . .</div>
          <div className="home-page-details-i-am">
            I am <span className="home-page-sew">Sewmini</span>
            <div className="little-description-about-me">
              Ambitious{" "}
              <span className="home-page-software">
                Software Engineering student
              </span>{" "}
              eager for knowledge. Passionate about building cohesive teams,
              fostering open communication, driving meaningful change, and
              achieving tasks with excellence
            </div>
            <ReusableButton />
            <div className="home-page-contact-circle-sction">
              <ContactCircle imagePath={social} />

              <ContactCircle imagePath={facebook} />
              <ContactCircle imagePath={linkdin} />
              <ContactCircle imagePath={github} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
