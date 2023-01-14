import React from "react";

function Page6() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Search Speed</h1>
      </div>
      <div className="tutorial-text">
        You may change the visualiser's speed by clicking{" "}
        <button className="change-speed-label">Speed</button> on the Navigation
        Bar.
      </div>
      <div className="tutorial-text">
        The default speed is <b>Normal</b>. On each toggle, the speed will
        rotate in a cycle from Normal to Fast to Slow and back to Normal.
      </div>

      <img
        className="search-speed-gif"
        src="../images/searchspeed.gif"
        alt="search speed gif"
      />
      <div className="tutorial-text">
        <i>
          TLDR: The "Slow" speed is half the time of "Normal" speed while the
          "Fast" speed is twice the time of "Normal" speed.
        </i>
      </div>
    </>
  );
}

export default Page6;
