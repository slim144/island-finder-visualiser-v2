import React from "react";

function Page2() {
  return (
    <>
      <div className="tutorial-title">
        <h1>Grid Size</h1>
      </div>
      <div className="tutorial-text">
        To choose the grid size that you want, simply click{" "}
        <button className="grid-size-label">
          Grid Size <i className="fa-solid fa-caret-down" />
        </button>{" "}
        on the Navigation Bar. A drop-down list will appear with the different
        grid size options. They are represented in rows by columns.{" "}
        <i> e.g. 25 x 70 will represent 20 rows and 70 columns.</i>
      </div>
      <div className="tutorial-text">
        The current (active) grid size will be colored in{" "}
        <b className="color-label">dark blue</b>.
      </div>
      <div className="tutorial-text">
        By default, the grid size is set to{" "}
        <b className="color-label">25 x 70</b>. Click on any other item in the
        drop-down list to change the grid size.
      </div>
      <div className="gridsize-img">
        <img src="../images/gridsize.PNG" alt="grid size png" />
      </div>
    </>
  );
}

export default Page2;
