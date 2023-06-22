import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink style={{fontSize: '3vh'}} className="navbar-brand font-weight-bold" to={"/"}>
          Employee-Management-System
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink style={{fontSize: '20px'}} className="mr-3 nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{fontSize: '20px'}} className="mr-3 nav-link" to={"/add"}>
                Add Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
