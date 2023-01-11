import React from "react";

function LegendContent({ iconName, iconDescription }) {
  return (
    <div className="legend-content">
      <div className={`legend-icon legend-icon-${iconName}`} />
      <div className="legend-description">{iconDescription}</div>
    </div>
  );
}

export default LegendContent;
