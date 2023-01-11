import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-title">
        <img src="./images/about.svg" alt="about img" />
        <h1>About</h1>
      </div>
      <p className="about-text">
        This is my own personal project that was solely based on my own frontend
        skills. Even though the idea behind this visualiser was inspired by
        Clément Mihailescu's work, the coding were purely done by me. However, I
        did received some help from the internet i.e. (Stack Overflow, Github,
        etc.) when I was stucked or faced with bugs and obstacles.
      </p>
      <div className="programming-language">
        <p className="about-text">
          <b>Programming Language:</b>
          <br />
          <i className="fa-brands fa-react add-margin-right" />
          React
          <i className="fa-brands fa-square-js add-margin" />
          Javascript
          <i className="fa-brands fa-html5 add-margin" />
          HTML5
          <i className="fa-brands fa-css3 add-margin" />
          CSS3
        </p>
      </div>

      <div className="data-structure-and-algorithm">
        <p className="about-text">
          <b>Data Structure & Algorithms:</b>
          <br />
          <i className="fa-solid fa-layer-group add-margin-right" />
          Stack
          <i className="fa-solid fa-users-line add-margin" />
          Queue
          <i className="fa-solid fa-diagram-project add-margin" />
          Graph DSA (Breadth First Search, Depth First Search)
          <i className="fa-solid fa-repeat add-margin" />
          Recursion
        </p>
      </div>

      <div className="responsiveness">
        <p className="about-text">
          <b>Responsiveness:</b>
          <br />
          Due to the fact that this is a visualiser, the UI will be too small
          for the user to see and interact on mobile. Therefore this application
          is only designed for <b>Tablet</b> (Landscape), <b>Laptop</b> (1366 x
          768) and <b>Desktop</b> (1920x1080). For better experience, laptop and
          desktop is recommended.
        </p>
      </div>

      <div className="about-this-application">
        <p className="about-text">
          <b>About this Application: </b>
          <br />
          This application will start visualising from a specified starting
          point across the grid. Depending on the search algorithm that you
          choose, the application will visualise either BFS or DFS. When a land
          is detected, it will recursively search its neighbouring nodes until
          all the neighbour land has been found, and this collection will be an
          island.
        </p>
        <p className="about-text">
          <i>
            Note: If the collection has only one node (i.e. the land itself), it
            will be deem as an outlier and not be considered an island
          </i>
        </p>
        <p className="about-text">
          Once the the search has completed, the application will count the
          island one at a time until all of them has been accounted for. This
          overall visualise how the alogrithm searched through the given grid
          and return the number of islands.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
