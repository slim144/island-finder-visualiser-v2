import React from "react";
import { useState } from "react";
import "./InstructionModal.css";

function Card({ title, description, imgURL, onClick }) {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      className="card-body"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      onClick={() => onClick(title)}
    >
      <img className="card-img" src={imgURL} alt="Icon Img"></img>
      <h2 className="card-title">{title}</h2>
      {mouseHover && <p className="card-text">{description}</p>}
    </div>
  );
}

export default Card;
