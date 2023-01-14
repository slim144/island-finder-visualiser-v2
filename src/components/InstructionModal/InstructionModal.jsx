import React, { useState } from "react";
import Card from "./Card";
import AboutPage from "./AboutPage/AboutPage.jsx";
import InspirationPage from "./InspirationPage/InspirationPage";
import TutorialPage from "./TutorialPage/TutorialPage.jsx";
import inspirationIcon from "../../assets/inspiration.svg";
import aboutIcon from "../../assets/about.svg";
import tutorialIcon from "../../assets/tutorial.svg";
import appIcon from "../../assets/navLogo.png";

import "./InstructionModal.css";

function InstructionModal({ setInstructionModalOpen }) {
  const [hoverCloseBtn, setHoverCloseBtn] = useState(false);
  const [hoverBackBtn, setHoverBackBtn] = useState(false);
  const [mainPageOpen, setMainPageOpen] = useState(true);
  const [inspirationPageOpen, setInspirationPageOpen] = useState(false);
  const [aboutPageOpen, setAboutPageOpen] = useState(false);
  const [tutorialPageOpen, setTutorialPageOpen] = useState(false);

  const mainPageItems = [
    {
      title: "Inspiration",
      description: "The inspiration and thought process behind this project",
      imgURL: inspirationIcon,
    },
    {
      title: "About",
      description: "Short summary and details about this project",
      imgURL: aboutIcon,
    },
    {
      title: "Tutorial",
      description: "Walkthrough all the features of this application",
      imgURL: tutorialIcon,
    },
  ];

  const handleCardClick = (title) => {
    switch (title) {
      case "Inspiration":
        setInspirationPageOpen(true);
        setMainPageOpen(false);
        break;
      case "About":
        setAboutPageOpen(true);
        setMainPageOpen(false);
        break;
      case "Tutorial":
        setTutorialPageOpen(true);
        setMainPageOpen(false);
        break;
      default:
        console.log("An error as occurred");
    }
  };

  return (
    <div className="modal-container">
      <div className={"modal-content modal-main-page"}>
        <div className="modal-buttons">
          {!mainPageOpen && (
            <button
              className={
                hoverBackBtn ? "btn-modal btn-back hover" : "btn-modal btn-back"
              }
              onClick={() => {
                setHoverBackBtn(false);
                setMainPageOpen(true);
                setInspirationPageOpen(false);
                setAboutPageOpen(false);
                setTutorialPageOpen(false);
              }}
              onMouseEnter={() => setHoverBackBtn(true)}
              onMouseLeave={() => setHoverBackBtn(false)}
            >
              <i className="fa-solid fa-arrow-left"></i>
              {hoverBackBtn && <p>Back</p>}
            </button>
          )}

          <button
            className={
              hoverCloseBtn
                ? "btn-modal btn-close hover"
                : "btn-modal btn-close"
            }
            onClick={() => setInstructionModalOpen(false)}
            onMouseEnter={() => setHoverCloseBtn(true)}
            onMouseLeave={() => setHoverCloseBtn(false)}
          >
            <i className="fa-solid fa-x"></i>
            {hoverCloseBtn && <p>Close</p>}
          </button>
        </div>

        {mainPageOpen && (
          <div className="main-page">
            <div className="main-title">
              <img src={appIcon} alt="Logo" className="main-page-logo" />
              Welcome to Island Finder
            </div>
            <h2 className="main-text">
              Click on the items below to find out more...
            </h2>
            <div className="card-wrapper">
              {mainPageItems.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgURL={item.imgURL}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        )}
        {inspirationPageOpen && <InspirationPage />}
        {aboutPageOpen && <AboutPage />}
        {tutorialPageOpen && <TutorialPage />}
      </div>
    </div>
  );
}

export default InstructionModal;
