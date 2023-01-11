import React from "react";

function Page1() {
  return (
    <>
      <div className="tutorial-title">
        <img src="./images/tutorial.svg" alt="tutorial img" />
        <h1>Tutorial</h1>
      </div>
      <div className="tutorial-text page-1-text">
        This tutorial will guide you through all the functionality and features
        of this application.
      </div>
      <div className="tutorial-text page-1-text">
        Feel free to click "<i className="fa-solid fa-chevron-right" />" below
        to begin.
      </div>
    </>
  );
}

export default Page1;
