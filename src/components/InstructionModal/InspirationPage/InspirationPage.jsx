import React from "react";
import "./InspirationPage.css";

function InspirationPage() {
  const gridExample = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
  ];
  return (
    <div className="inspiration-page">
      <div className="inspiration-title">
        <img src="./images/inspiration.svg" alt="lightbulb img" />
        <h1>Inspiration</h1>
      </div>
      <p className="inspiration-text">
        The idea of this visualiser was inspired by a youtuber named Clément
        Mihailescu. He has done many wonderful work on visualising algorithms
        such as Pathfinder Visualiser and Sorting Visualiser.
      </p>
      <p className="inspiration-text">
        I wanted to create my own unique visualiser and not plagiarize his work.
        Hence, I went and find algorithms that I could potentially visualise it.
        That was when I came across a particular graph algorithm problem from
        Leet Code.
      </p>
      <div className="problem">
        <p className="problem-title">The problem: </p>
        <p className="problem-description">
          Given a 2D array represeting a grid of land and waters, where L
          represents land and W represent water. Write a function, islandCount,
          that takes in the 2D array grid containing Ws and Ls. The function
          should return the number of islands on the grid. An island is a
          vertically or horizontally connected region of land. A land on its own
          without any neighbour is an outlier and should not be considered as an
          island.
        </p>
        <p className="problem-description">
          For example, given the grid to be: [ ['W', 'L', 'W', 'W', 'W'], ['W',
          'L', 'W', 'W', 'W'], ['W', 'W', 'W', 'L', 'W'], ['W', 'W', 'L', 'L',
          'W'], ['L', 'W', 'W', 'L', 'L'], ['L', 'L', 'W', 'W', 'W'], ]
        </p>

        <p className="problem-description">
          The grid can be interpreted by sketching it out and from
          visualisation, it can be seen that there are 3 islands for the given
          grid.
        </p>
        <div className="problem-graph">
          <table>
            <tbody>
              {gridExample.map((gridRow, rowIndex) => (
                <tr key={rowIndex}>
                  {gridRow.map((gridNode, colIndex) => (
                    <td key={rowIndex + "-" + colIndex}>{gridNode}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="arrow-indicator">
            <p>through visualisation</p>
            <p style={{ fontSize: "2rem" }}>→</p>
          </div>
          <table>
            <tbody>
              {gridExample.map((gridRow, rowIndex) => (
                <tr key={rowIndex}>
                  {gridRow.map((gridNode, colIndex) => (
                    <td
                      className={
                        gridNode === "L"
                          ? "grid-example-land"
                          : "grid-example-water"
                      }
                      key={"colored-" + rowIndex + "-" + colIndex}
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="inspiration-text">
        And in this aha moment, I've decided to created this application to
        visualise how this problem can be solved. In addition, this is a great
        opportunity for me to work on React Application as well as get a better
        understanding on graph algorithm.
      </p>
    </div>
  );
}

export default InspirationPage;
