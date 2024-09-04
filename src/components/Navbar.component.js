import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searcher from "./cards/Searcher.card";
import styles from "./Navbar.component.module.css";

const Navbar = ({ filterStatus }) => (
  <nav
    className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#Home">
        AJF Live-re-Wire
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Searcher filterStatus={filterStatus} />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
