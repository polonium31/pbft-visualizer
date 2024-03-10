import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-div">
        <h1 className="heading">
          Practical Byzantine Fault Tolerance (pBFT) Visualizer
        </h1>
        <nav>
          <ul className="navbar">
            <li>
              <a className="link">
                <NavLink
                  to="/"
                  style={(isActive) => ({
                    textDecoration: isActive ? "none" : "none",
                    color: "#000000",
                  })}
                >
                  Home
                </NavLink>
              </a>
            </li>
            <li>
              <a className="link">
                <NavLink
                  to="/visual"
                  style={(isActive) => ({
                    textDecoration: isActive ? "none" : "none",
                    color: "#000000",
                  })}
                >
                  Visual
                </NavLink>
              </a>
            </li>
            <li>
              <a className="link">
                <NavLink
                  to="/algorithm"
                  style={(isActive) => ({
                    textDecoration: isActive ? "none" : "none",
                    color: "#000000",
                  })}
                >
                  Algorithm
                </NavLink>
              </a>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
