import React from "react";

function Page4() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Search Pattern (Cont.)</h1>
      </div>
      <div className="tutorial-text">
        <b>Breadth First Search</b>: A graph algorithm that uses Queue data
        structure. It traverse through all nodes on the same level before moving
        on the the next level.
      </div>
      <div className="tutorial-text">
        <b>Depth First Search</b>: A graph traversal algorithm that uses Stack
        data structure. It begins at the root node and traverse through the
        nodes as far as possible until it reaches the node with no unvisited
        nearby nodes.
      </div>
      <div className="tutorial-text">
        <b>Left to Right</b>: A simple search algorithm that uses For loop to
        traverse through the grid, starting from the root node, it proceeds from
        left to right until all the rows has been visited.
      </div>
      <div className="tutorial-text">
        <b>Top to Bottom</b>: A simple search algorithm that uses For loop to
        traverse through the grid, starting from the root node, it proceeds from
        Top to Bottom, until all the columns has been visited.
      </div>
    </>
  );
}

export default Page4;
