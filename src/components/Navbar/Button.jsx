import React from "react";
import "./Button.css";

function Button({ searchState, onClick, instructionModalOpen }) {
  const buttonClass = instructionModalOpen
    ? "btn-disabled"
    : searchState === "START"
    ? "btn-default"
    : searchState === "SEARCHING"
    ? "btn-searching"
    : "btn-end";

  const buttonName =
    searchState === "START"
      ? "Search Island"
      : searchState === "SEARCHING"
      ? "Searching..."
      : "Reset";

  return (
    <button
      disabled={instructionModalOpen}
      className={`btn-nav ${buttonClass}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}

export default Button;
