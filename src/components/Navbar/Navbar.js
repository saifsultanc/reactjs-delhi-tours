import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/tours" className="nav-link active">
            tours
          </Link>
        </li>
      </ul>
    </nav>
  );
}
