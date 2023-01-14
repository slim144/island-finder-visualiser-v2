import React from "react";

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
          src="../images/binoculars.svg"
          alt="binocular img"
        />{" "}
        icon located on the grid.
      </div>
      <img
        className="searchpoint-gif"
        src="../images/searchpoint.gif"
        alt="searchpoint gif"
      />
    </>
  );
}

export default Page5;
