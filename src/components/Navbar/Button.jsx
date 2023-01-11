import React from "react";
import "./Button.css";

function Button({ searchState, onClick, modalOpen }) {
  const buttonClass = modalOpen
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
      disabled={modalOpen}
      className={`btn-nav ${buttonClass}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}

export default Button;
