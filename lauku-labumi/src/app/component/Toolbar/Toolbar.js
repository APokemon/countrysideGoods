import React from "react";

import BetterSideDrawer from "../SideDrawer/BetterSideDrawer";
import "./Toolbar.css";
const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_navigation_side_button">
        <BetterSideDrawer click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default toolbar;
