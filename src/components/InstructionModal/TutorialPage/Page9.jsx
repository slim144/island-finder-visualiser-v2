import React from "react";
import resetGIF from "../../../assets/reset.gif";

function Page9() {
  return (
    <>
      <div className="tutorial-title">
        <h1>End</h1>
      </div>
      <div className="tutorial-text">
        Once the visualiser has completed, you may choose to reset the grid by
        clickling <button className="reset-label">Reset</button> at the middle
        of the Navigation Bar or click{" "}
        <button className="clear-board-label">Clear Grid</button> at end of the
        Navigation bar.
      </div>
      <img className="reset-gif" src={resetGIF} alt="reset gif" />
      <div className="tutorial-text">
        <i>
          Note:{" "}
          <button className="grid-size-label">
            Grid Size <i className="fa-solid fa-caret-down" />
          </button>{" "}
          and{" "}
          <button className="search-pattern-label">
            Search Pattern <i className="fa-solid fa-caret-down" />
          </button>{" "}
          will be disabled until the grid is resetted.
        </i>
      </div>
    </>
  );
}

export default Page9;
