import React from "react";
import logo from "../portfolio-name.png";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faCaretSquareDown} style={{ color: "white" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              about me
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
