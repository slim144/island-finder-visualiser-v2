import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";

import "./TutorialPage.css";

function TutorialPage() {
  const [pageNum, setPageNum] = useState(0);

  const pageContent = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
    <Page6 />,
    <Page7 />,
    <Page8 />,
    <Page9 />,
  ];

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">{pageContent[pageNum]}</div>
      <div className="tutorial-btn-group">
        <button
          className="page-arrow left"
          disabled={pageNum === 0}
          onClick={() => setPageNum((currPageNum) => currPageNum - 1)}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        {Array.from(Array(pageContent.length).keys()).map((number) => (
          <button
            className={
              pageNum === number ? "page-number active" : "page-number"
            }
            onClick={() => setPageNum(number)}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="page-arrow right"
          disabled={pageNum === pageContent.length - 1}
          onClick={() => setPageNum((currPageNum) => currPageNum + 1)}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default TutorialPage;
