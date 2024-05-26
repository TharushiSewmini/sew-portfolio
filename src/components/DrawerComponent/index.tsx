import React, { useState } from "react";
import "./index.css";
import arrowleft from "../../assets/left.png";
interface DrawerComponentProps {
  isExpand: boolean;
  onClick: (e: any) => void;
}
const DrawerComponent = ({ isExpand, onClick }: DrawerComponentProps) => {
  return (
    <div
      className="drawer-main-container"
      style={{
        display: isExpand ? "flex" : "none",
      }}
    >
      <div className="home-page-left-small-container-bg">
        <div className="home-page-left-small-container">
          <div className="home-page-left-small-c-left">
            {/* <div className="home-page-left-small-container-logo">Sew</div> */}
            <div className="home-page-left-small-container-tabs">
              <li className="home-page-left-small-container-tab">Home</li>

              <li className="home-page-left-small-container-tab">Projects</li>

              <li className="home-page-left-small-container-tab">Experience</li>

              <li className="home-page-left-small-container-tab">Contact Me</li>
            </div>
          </div>
          <div className="home-page-left-small-c-right">
            <img
              src={arrowleft}
              className="home-page-left-small-arrow-right"
              onClick={onClick}
              style={{
                display: "flex",
              }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
