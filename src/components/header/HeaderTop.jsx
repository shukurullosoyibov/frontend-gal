import React from "react";
import { Link } from "react-router-dom";

export default function HeaderTop({data}) {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">
           {data && data.title}
          </p>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <a href="#">USD</a>
            <ul className="dropdown-box">
              <li>
                <a href="#">USD</a>
              </li>
              <li>
                <a href="#">EUR</a>
              </li>
            </ul>
          </div>
          
          <span className="divider" />
          {
            data && 
            <Link to={data?.contact[0]?.url} target="_blank" className="contact d-lg-show mr-1">
            <i className="d-icon-map mr-1" />
            {data?.contact[0]?.title}
          </Link>
          }
        
          
        </div>
      </div>
    </div>
  );
}
