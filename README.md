# ISLAND FINDER VISUALISER V2

Welcome to Island Finder Visualiser V2. This is an upgraded version from my other project (https://github.com/slim144/island-finder-visualiser) with added features such as manual page, responsiveness to laptop, and cleaner and refactored codes. You may access the application through this link: https://slim144.github.io/island-finder-visualiser-v2/.

## Inspiration
The idea of this visualiser was inspired by a youtuber named Clément Mihailescu. He has done many wonderful work on visualising algorithms such as Pathfinder Visualiser and Sorting Visualiser.

I wanted to create my own unique visualiser and not plagiarize his work. Hence, I went and find algorithms that I could potentially visualise it. That was when I came across a particular graph algorithm problem from Leet Code.

***The problem**:
Given a 2D array represeting a grid of land and waters, where L represents land and W represent water. Write a function, islandCount, that takes in the 2D array grid containing Ws and Ls. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land. A land on its own without any neighbour is an outlier and should not be considered as an island.*

And in this aha moment, I've decided to created this application to visualise how this problem can be solved. In addition, this is a great opportunity for me to work on React Application as well as get a better understanding on graph algorithm.

## About
This application will start visualising from a specified starting point across the grid. Depending on the search algorithm that you choose, the application will visualise either BFS or DFS. When a land is detected, it will recursively search its neighbouring nodes until all the neighbour land has been found, and this collection will be an island.

*Note: If the collection has only one node (i.e. the land itself), it will be deem as an outlier and not be considered an island*

Once the the search has completed, the application will count the island one at a time until all of them has been accounted for. This overall visualise how the alogrithm searched through the given grid and return the number of islands.
