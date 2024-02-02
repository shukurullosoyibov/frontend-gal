import React from "react";
import BrowerCollection from "./BrowerCollection";

export default function HeaderBottom() {
  return (
    <div className="header-bottom has-dropdown pb-0 sticky-header has-dropdown fix-top sticky-content d-lg-show">
      <div className="container d-flex align-items-center">
       <BrowerCollection />

        <nav className="main-nav ml-4">
          <ul className="menu menu-active-underline">
            <li className="">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="/gallery">All</a>
            </li>
            
            
          </ul>
        </nav>
        <div className="d-flex align-items-center ml-auto">
          <a href="https://d-themes.com/buynow/riodehtml" rel="noreferrer">
            Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
