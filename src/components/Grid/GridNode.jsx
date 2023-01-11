import React from "react";

function GridNode({ node, id, onMouseDown, onMouseUp, onMouseEnter }) {
  const { isLand, isAnimate, isSearchPoint, isVisited, animateIsland } = node;
  const nodeClassName = animateIsland
    ? "island-found"
    : isAnimate
    ? isLand
      ? "land-found"
      : "sea-found"
    : isLand
    ? "land-node"
    : "water-node";

  return (
    <td
      id={id}
      className={`node-grid ${nodeClassName}`}
      onMouseDown={(e) => {
        e.preventDefault();
        onMouseDown(node);
      }}
      onMouseUp={() => onMouseUp()}
      onMouseEnter={() => onMouseEnter(node)}
    >
      {isSearchPoint && !isVisited && (
        <img
          src="./images/binoculars.svg"
          alt={"search point Img"}
          className={"search-point-svg"}
        />
      )}
    </td>
  );
}

export default GridNode;
