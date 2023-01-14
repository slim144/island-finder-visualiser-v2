import React from "react";
import searchPointIcon from "../../../assets/binoculars.svg";
import searchPointGIF from "../../../assets/searchpoint.gif";

function Page5() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Search Point (Root Node)</h1>
      </div>
      <div className="tutorial-text page-5">
        To determine where you want the algorithm to begin its search, simply
        click-and-drag the{" "}
        <img
          className="searchpoint-img"
          src={searchPointIcon}
          alt="binocular img"
        />{" "}
        icon located on the grid.
      </div>
      <img
        className="searchpoint-gif"
        src={searchPointGIF}
        alt="searchpoint gif"
      />
    </>
  );
}

export default Page5;
