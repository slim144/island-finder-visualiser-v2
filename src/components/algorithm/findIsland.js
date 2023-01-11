var nodesVisited, searchSequence;

function traverseAllNode(grid, rowSearch, colSearch, searchPattern) {
  switch (searchPattern) {
    case "BFS":
      const bfsQueue = [grid[rowSearch][colSearch]];
      while (bfsQueue.length > 0) {
        const currentNode = bfsQueue.shift();
        if (!currentNode.isTraversed) {
          const { row, col } = currentNode;
          if (row > 0) bfsQueue.push(grid[row - 1][col]);
          if (col < grid[0].length - 1) bfsQueue.push(grid[row][col + 1]);
          if (row < grid.length - 1) bfsQueue.push(grid[row + 1][col]);
          if (col > 0) bfsQueue.push(grid[row][col - 1]);
          currentNode.isTraversed = true;
          searchSequence.push(currentNode);
        }
      }
      break;
    case "DFS":
      const dfsStack = [grid[rowSearch][colSearch]];
      while (dfsStack.length > 0) {
        const currentNode = dfsStack.pop();
        if (!currentNode.isTraversed) {
          const { row, col } = currentNode;
          if (row > 0) dfsStack.push(grid[row - 1][col]);
          if (col > 0) dfsStack.push(grid[row][col - 1]);
          if (col < grid[0].length - 1) dfsStack.push(grid[row][col + 1]);
          if (row < grid.length - 1) dfsStack.push(grid[row + 1][col]);

          currentNode.isTraversed = true;
          searchSequence.push(currentNode);
        }
      }
      break;
    case "LTR":
      for (let j = colSearch; j < grid[0].length; j++) {
        searchSequence.push(grid[rowSearch][j]);
      }
      for (let i = rowSearch + 1; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          searchSequence.push(grid[i][j]);
        }
      }
      for (let i = 0; i < rowSearch; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          searchSequence.push(grid[i][j]);
        }
      }
      for (let j = 0; j < colSearch; j++) {
        searchSequence.push(grid[rowSearch][j]);
      }
      break;
    case "TTB":
      for (let j = rowSearch; j < grid.length; j++) {
        searchSequence.push(grid[j][colSearch]);
      }
      for (let i = colSearch + 1; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
          searchSequence.push(grid[j][i]);
        }
      }
      for (let i = 0; i < colSearch; i++) {
        for (let j = 0; j < grid.length; j++) {
          searchSequence.push(grid[j][i]);
        }
      }
      for (let j = 0; j < rowSearch; j++) {
        searchSequence.push(grid[j][colSearch]);
      }
      break;
    default:
      console.log("Error has occurred. Invalid search pattern");
  }
}

function findIsland(grid, rowSearch, colSearch, searchPattern) {
  nodesVisited = [];
  searchSequence = [];

  traverseAllNode(grid, rowSearch, colSearch, searchPattern);

  while (searchSequence.length > 0) {
    const currentNode = searchSequence.shift();
    if (!currentNode.isVisited) {
      if (currentNode.isLand) {
        updateIsland(grid, currentNode);
      } else {
        currentNode.isVisited = true;
        nodesVisited.push(currentNode);
      }
    }
  }

  return nodesVisited;
}

function updateIsland(grid, currentNode) {
  const { row, col } = currentNode;
  const island = exploreIsland(grid, row, col);

  if (island.length === 1) nodesVisited.push(currentNode);
  else nodesVisited.push(island);

  return;
}

function exploreIsland(grid, row, col) {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound) return [];

  const currentNode = grid[row][col];
  if (currentNode.isVisited || !currentNode.isLand) return [];

  currentNode.isVisited = true;
  return [
    currentNode,
    ...exploreIsland(grid, row + 1, col),
    ...exploreIsland(grid, row - 1, col),
    ...exploreIsland(grid, row, col + 1),
    ...exploreIsland(grid, row, col - 1),
  ];
}

export default findIsland;
