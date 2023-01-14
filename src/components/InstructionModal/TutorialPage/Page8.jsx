import React from "react";
import searchIslandGIF from "../../../assets/searchisland.gif";

function Page8() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Search Island</h1>
      </div>
      <div className="tutorial-text">
        Once you have finishing setting up the <b>Grid Size</b>,{" "}
        <b>Search Pattern</b>, <b>Search Point</b>, <b>Search Speed</b> and{" "}
        <b>Land Nodes</b>, you may begin the visualiser by clicking{" "}
        <button className="search-island-label">Search Island</button> located
        at the middle of the Navigation Bar.
      </div>

      <img
        className="search-island-gif"
        src={searchIslandGIF}
        alt="search island gif"
      />
      <div className="tutorial-text">
        <i>
          Note: All the buttons and items on the navigation bar will be disabled
          when the visualiser is in progress.
        </i>
      </div>
    </>
  );
}

export default Page8;
