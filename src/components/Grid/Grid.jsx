import React from "react";
import "./Grid.css";
import GridRow from "./GridRow";

function Grid({ grid, onMouseDown, onMouseUp, onMouseEnter }) {
  return (
    <div className="body-grid">
      <table className="table-grid">
        <tbody className="table-body-grid">
          {grid.map((row, rowIndex) => (
            <GridRow
              key={rowIndex}
              id={rowIndex}
              nodeRow={row}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseEnter={onMouseEnter}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
