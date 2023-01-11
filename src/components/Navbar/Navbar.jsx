import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";

function Navbar({
  modalOpen,
  searchState,
  gridSize,
  setGridSize,
  searchPattern,
  setSearchPattern,
  visualiseIslandFinder,
  generateRandomLand,
  clearBoard,
}) {
  const [gridDropdown, setGridDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const gridRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (
        gridDropdown &&
        gridRef.current &&
        !gridRef.current.contains(e.target)
      )
        setGridDropdown(false);
      if (
        searchDropdown &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      )
        setSearchDropdown(false);
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => document.removeEventListener("mousedown", clickedOutside);
  }, [gridDropdown, searchDropdown]);

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img
            src="./images/navLogo.png"
            alt="Logo"
            width="30"
            height="30"
            className="navbar-logo-img"
          />
          ISLAND FINDER
        </a>
        <ul className="nav-menu">
          <li ref={gridRef} className="nav-item">
            <button
              disabled={searchState !== "START" || modalOpen}
              className={gridDropdown ? "nav-link active" : "nav-link"}
              onClick={() => {
                setGridDropdown(!gridDropdown);
                setSearchDropdown(false);
              }}
            >
              Grid Size <i className="fa-solid fa-caret-down"></i>
            </button>
            {gridDropdown && (
              <Dropdown gridSize={gridSize} setGridSize={setGridSize} />
            )}
          </li>
          <li ref={searchRef} className="nav-item">
            <button
              disabled={searchState !== "START" || modalOpen}
              className={searchDropdown ? "nav-link active" : "nav-link"}
              onClick={() => {
                setSearchDropdown(!searchDropdown);
                setGridDropdown(false);
              }}
            >
              Search Pattern <i className="fa-solid fa-caret-down" />
            </button>
            {searchDropdown && (
              <Dropdown
                searchPattern={searchPattern}
                setSearchPattern={setSearchPattern}
              />
            )}
          </li>
          <li className="nav-item">
            <Button
              modalOpen={modalOpen}
              searchState={searchState}
              onClick={() => {
                if (searchState === "END") {
                  clearBoard();
                } else {
                  visualiseIslandFinder();
                }
              }}
            />
          </li>
          <li className="nav-item">
            <button
              disabled={searchState === "SEARCHING" || modalOpen}
              className="nav-link"
              onClick={() => generateRandomLand()}
            >
              Generate Random Land
            </button>
          </li>
          <li className="nav-item">
            <button
              disabled={searchState === "SEARCHING" || modalOpen}
              className="nav-link"
              onClick={() => clearBoard()}
            >
              Clear Board
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
