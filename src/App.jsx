import React, { useState, useEffect } from "react";
import Grid from "./components/Grid/Grid";
import findIsland from "./components/algorithm/findIsland";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import InstructionModal from "./components/InstructionModal/InstructionModal";
import "./App.css";

function App() {
  const isLand = [false, false, false, false, true];
  const speedMultiplier = [2, 1, 0.5];

  const [instructionModalOpen, setInstructionModalOpen] = useState(true);
  const [gridSize, setGridSize] = useState({ row: 20, col: 60 });
  const [searchPoint, setSearchPoint] = useState({
    row: Math.floor(gridSize.row / 2),
    col: Math.floor(gridSize.col / 2),
  });
  const [searchSpeed, setSearchSpeed] = useState(1); // 0:Slow, 1:Normal, 2:Fast
  const [searchPattern, setSearchPattern] = useState("BFS");
  const [grid, setGrid] = useState(gridInit(gridSize.row, gridSize.col));
  const [isMousePressed, setMousePressed] = useState(false);
  const [dragSearchPoint, setDragSearchPoint] = useState(false);
  const [islandCount, setIslandCount] = useState(0);
  const [searchState, setSearchState] = useState("START");

  useEffect(() => {
    setSearchPoint({
      row: Math.floor(gridSize.row / 2),
      col: Math.floor(gridSize.col / 2),
    });
    setGrid(gridInit(gridSize.row, gridSize.col));
  }, [gridSize]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setGrid((currGrid) =>
      currGrid.map((gridRow) =>
        gridRow.map((gridNode) => {
          return {
            ...gridNode,
            isSearchPoint:
              gridNode.row === searchPoint.row &&
              gridNode.col === searchPoint.col,
          };
        })
      )
    );
  }, [searchPoint]);

  function gridInit(row, col) {
    const grid = [];
    for (let i = 0; i < row; i++) {
      const gridRow = [];
      for (let j = 0; j < col; j++) {
        gridRow.push(createNode(i, j));
      }
      grid.push(gridRow);
    }
    return grid;
  }

  function createNode(row, col) {
    return {
      row: row,
      col: col,
      isLand: false,
      isTraversed: false,
      isVisited: false,
      isAnimate: false,
      isSearchPoint: row === searchPoint.row && col === searchPoint.col,
      animateIsland: false,
    };
  }

  function visualiseIslandFinder() {
    const nodesVisited = findIsland(
      grid,
      searchPoint.row,
      searchPoint.col,
      searchPattern
    );
    animateNodesVisited(nodesVisited);
  }
  function animateNodesVisited(nodesVisited) {
    setSearchState("SEARCHING");
    nodesVisited.map((node, iIndex) => {
      // If the node is an array, it indicates a collection of island, else it is a water node
      if (Array.isArray(node)) {
        return node.map((landNode, jIndex) => {
          const updatedGrid = [...grid];
          return setTimeout(() => {
            const { row, col } = landNode;
            updatedGrid[row][col] = {
              ...landNode,
              isAnimate: true,
            };
            setGrid(updatedGrid);
          }, (10 * iIndex + 40 * jIndex) * speedMultiplier[searchSpeed]);
        });
      } else {
        const updatedGrid = [...grid];
        return setTimeout(() => {
          const { row, col } = node;
          updatedGrid[row][col] = {
            ...node,
            isLand: false,
            isAnimate: true,
          };
          setGrid(updatedGrid);
        }, 10 * iIndex * speedMultiplier[searchSpeed]);
      }
    });
    setTimeout(
      () => animateIslandFound(nodesVisited),
      (nodesVisited.length * 10 + 2000) * speedMultiplier[searchSpeed]
    );
  }

  function animateIslandFound(nodesVisited) {
    const islands = nodesVisited.filter((node) => Array.isArray(node));
    islands.map((island, islandIndex) => {
      const updatedGrid = [...grid];
      return setTimeout(() => {
        island.map((islandNode) => {
          const { row, col } = islandNode;
          return (updatedGrid[row][col] = {
            ...islandNode,
            animateIsland: true,
          });
        });
        setGrid(updatedGrid);
        setIslandCount((currCount) => currCount + 1);
      }, 500 * islandIndex * speedMultiplier[searchSpeed]);
    });
    setTimeout(() => setSearchState("END"), 500 * islands.length + 500);
  }

  function generateRandomLand() {
    setSearchState("START");
    setIslandCount(0);
    setGrid((currGrid) =>
      currGrid.map((gridRow) =>
        gridRow.map((gridNode) => {
          return {
            ...gridNode,
            isLand: isLand[Math.floor(Math.random() * isLand.length)],
            isTraversed: false,
            isVisited: false,
            isAnimate: false,
            animateIsland: false,
          };
        })
      )
    );
  }

  function clearBoard() {
    setSearchState("START");
    setIslandCount(0);
    setGrid((currGrid) =>
      currGrid.map((gridRow) =>
        gridRow.map((gridNode) => {
          return {
            ...gridNode,
            isLand: false,
            isTraversed: false,
            isVisited: false,
            isAnimate: false,
            animateIsland: false,
          };
        })
      )
    );
  }

  function updateNodePressed(currGrid, node) {
    const copyGrid = [...currGrid];
    const { row, col } = node;
    copyGrid[row][col] = {
      ...node,
      isLand: !node.isLand,
    };
    return copyGrid;
  }

  function handleMouseDown(node) {
    if (instructionModalOpen) return;
    if (node.isSearchPoint) setDragSearchPoint(true);
    else setGrid((prevGrid) => updateNodePressed(prevGrid, node));
    setMousePressed(true);
  }

  function handleMouseEnter(node) {
    if (!isMousePressed || instructionModalOpen) return;
    if (dragSearchPoint) setSearchPoint({ row: node.row, col: node.col });
    else setGrid((prevGrid) => updateNodePressed(prevGrid, node));
  }

  function handleMouseUp() {
    setMousePressed(false);
    setDragSearchPoint(false);
  }

  return (
    <>
      <Navbar
        instructionModalOpen={instructionModalOpen}
        searchState={searchState}
        setSearchState={setSearchState}
        gridSize={gridSize}
        setGridSize={setGridSize}
        searchPattern={searchPattern}
        setSearchPattern={setSearchPattern}
        searchSpeed={searchSpeed}
        setSearchSpeed={setSearchSpeed}
        visualiseIslandFinder={visualiseIslandFinder}
        generateRandomLand={generateRandomLand}
        clearBoard={clearBoard}
      />
      <Header
        searchState={searchState}
        gridSize={gridSize}
        searchPattern={searchPattern}
        islandCount={islandCount}
      />
      <Grid
        grid={grid}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
      />
      {instructionModalOpen && (
        <InstructionModal setInstructionModalOpen={setInstructionModalOpen} />
      )}
    </>
  );
}

export default App;
