import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  console.log(drawerClasses)
  console.log(props.show)
  return (
    
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/"> Users</a>
        </li>
        <li>
          <a href="/"> Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
