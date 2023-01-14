import React from "react";
import "./Dropdown.css";

function Dropdown({
  gridSize,
  setGridSize,
  setGridDropdown,

  searchPattern,
  setSearchPattern,
  setSearchDropdown,
}) {
  const gridSizes = [
    { row: 5, col: 10 },
    { row: 10, col: 10 },
    { row: 10, col: 20 },
    { row: 15, col: 30 },
    { row: 20, col: 40 },
    { row: 20, col: 60 },
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
        <ul className="dropdown-menu">
          {gridSizes.map((size, index) => (
            <li key={index} onClick={() => setGridDropdown(false)}>
              <button
                className={
                  gridSize.row === size.row && gridSize.col === size.col
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
                disabled={
                  gridSize.row === size.row && gridSize.col === size.col
                }
                onClick={() => setGridSize({ row: size.row, col: size.col })}
              >
                {size.row + " x " + size.col}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="dropdown-menu">
          {Object.keys(searchPatterns).map((key, index) => (
            <li key={index} onClick={() => setSearchDropdown(false)}>
              <button
                className={
                  searchPattern === key
                    ? "dropdown-link active"
                    : "dropdown-link"
                }
                disabled={searchPattern === key}
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
