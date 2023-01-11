import React from "react";
import Legends from "./Legends";
import "./Header.css";

function Header({ searchState, gridSize, searchPattern, islandCount }) {
  const searchPatterns = {
    BFS: "Breadth First Search",
    DFS: "Depth First Search",
    LTR: "Left to Right",
    TTB: "Top to Bottom",
  };
  return (
    <div className="body-content">
      <Legends />

      {searchState === "START" ? (
        <h1>Welcome to Island Finder</h1>
      ) : (
        <h1>
          Island Count: <b>{islandCount}</b>
        </h1>
      )}

      <div className="grid-description">
        <p>
          Grid Size:{" "}
          <b>
            {gridSize.row} x {gridSize.col}
          </b>
        </p>
        <p>
          Search Pattern: <b>{searchPatterns[searchPattern]}</b>
        </p>
      </div>
    </div>
  );
}

export default Header;
