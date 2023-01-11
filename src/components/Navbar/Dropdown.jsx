import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ gridSize, setGridSize, searchPattern, setSearchPattern }) {
  const [close, setClose] = useState(false);

  const gridSizes = [
    { row: 5, col: 10 },
    { row: 10, col: 10 },
    { row: 20, col: 20 },
    { row: 20, col: 50 },
    { row: 25, col: 60 },
    { row: 25, col: 70 },
  ];

  const searchPatterns = {
    BFS: "Breadth First Search",
    DFS: "Depth First Search",
    LTR: "Left to Right",
    TTB: "Top to Bottom",
  };

  return (
    <>
      {gridSize ? (
        <ul className={close ? "dropdown-menu close" : "dropdown-menu"}>
          {gridSizes.map((size, index) => (
            <li key={index} onClick={() => setClose(false)}>
              <button
                className={
                  gridSize.row === size.row && gridSize.col === size.col
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
                onClick={() => setGridSize({ row: size.row, col: size.col })}
              >
                {size.row + " x " + size.col}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={close ? "dropdown-menu close" : "dropdown-menu"}>
          {Object.keys(searchPatterns).map((key, index) => (
            <li key={index} onClick={() => setClose(false)}>
              <button
                className={
                  searchPattern === key
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
                onClick={() => setSearchPattern(key)}
              >
                {searchPatterns[key]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Dropdown;
