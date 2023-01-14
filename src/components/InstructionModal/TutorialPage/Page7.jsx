import React from "react";

function Page7() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Land Node</h1>
      </div>
      <div className="tutorial-text">
        By default, the grid will be filled with water node, i.e. there will be
        no land.
      </div>
      <div className="tutorial-text">
        To set the land, you may click on the node or click-and-drag around on
        the given grid.
      </div>
      <div className="land-gif-container">
        <img
          className="land-gif"
          src="../images/landclick.gif"
          alt="land click gif"
        />
        <img
          className="land-gif"
          src="../images/landdrag.gif"
          alt="land drag gif"
        />
      </div>
      <div className="tutorial-text">
        Or simply click{" "}
        <button className="generate-random-land-label">Randomised Land</button>{" "}
        on the Navigation Bar to randomise the nodes between land and water.
      </div>{" "}
      <div className="tutorial-text">
        <i>
          TLDR: For each node, the chances for the land node to appear is 20%.
        </i>
      </div>
    </>
  );
}

export default Page7;
