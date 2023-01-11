import React from "react";
import GridNode from "./GridNode";

function GridRow({ id, nodeRow, onMouseDown, onMouseUp, onMouseEnter }) {
  return (
    <tr id={id} className="table-row-grid">
      {nodeRow.map((node) => (
        <GridNode
          key={`${node.row}-${node.col}`}
          id={`${node.row}-${node.col}`}
          node={node}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseEnter={onMouseEnter}
        />
      ))}
    </tr>
  );
}

export default GridRow;
