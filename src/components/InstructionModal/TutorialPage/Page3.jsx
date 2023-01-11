import React from "react";

function Page3() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Search Pattern</h1>
      </div>
      <div className="tutorial-text">
        Click on{" "}
        <button className="search-pattern-label">
          Search Pattern <i className="fa-solid fa-caret-down" />
        </button>{" "}
        on the Navigation Bar to choose the type of search alogrithm that you
        want. A drop-down list will appear showing 4 types of search pattern.
        <i>
          {" "}
          i.e. "Breadth First Search", "Depth First Search", "Left to Right" and
          "Top to Bottom"
        </i>
        .
      </div>

      <div className="tutorial-text">
        Similar to grid size, the current (active) search pattern would be
        colored in <b className="color-label">dark blue</b>.
      </div>
      <div className="tutorial-text">
        By default, the search pattern is set to Breadth First Seach. To change
        it, click on any other item in the drop-down list.
      </div>
      <div className="searchpattern-img">
        <img src="../images/searchpattern.PNG" alt="grid size png" />
      </div>
    </>
  );
}

export default Page3;
