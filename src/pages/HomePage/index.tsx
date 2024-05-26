import React, { useState } from "react";
import "./index.css";
import myPic from "../../assets/new.png";
import ReusableButton from "../../components/ReusableButtonComponenet";
import arrow from "../../assets/right.png";
import sakura from "../../assets/sakura.png";
import sakura2 from "../../assets/sakura2.png";
import sakura3 from "../../assets/sakura3.png";
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
      <div className="home-animations">
        <img src={sakura} className="sakura-1" />
      </div>
      <div className="home-animations">
        <img src={sakura2} className="sakura-2" />
      </div>
      <div className="home-animations">
        <img src={sakura3} className="sakura-3" />
      </div>
      <div className="home-animations">
        <img src={sakura} className="sakura-4" />
      </div>
      <div className="home-animations">
        <img src={sakura2} className="sakura-5" />
      </div>
      <div className="home-animations">
        <img src={sakura3} className="sakura-6" />
      </div>
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
        <DrawerComponent isExpand={isExpand} onClick={chnagingState} />
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
              <ContactCircle
                imagePath={social}
                linkAddress={
                  "https://www.instagram.com/coding.sew?igsh=MXdkZG1xYXI3cHhraQ=="
                }
              />

              <ContactCircle
                imagePath={facebook}
                linkAddress={
                  "https://www.facebook.com/profile.php?id=100079223340313&mibextid=ZbWKwL"
                }
              />
              <ContactCircle
                imagePath={linkdin}
                linkAddress={
                  "https://www.linkedin.com/in/sewmini-rathnaweera-071530252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
              />
              <ContactCircle
                imagePath={github}
                linkAddress={"https://github.com/TharushiSewmini"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
