import React, { Component, Fragment } from "react";
import snhuLogo from "../../images/snhuLogo.png";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg m-5">
          <img src={snhuLogo} alt="snhu Logo" class="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" href="#">
                <span class="highlight"> 01 </span> Home{" "}
                <span class="sr-only">(current)</span>
              </a>
              <a class="nav-link" href="#">
                {" "}
                <span class="highlight"> 02 </span>
                Components
              </a>
              <a class="nav-link" href="#">
                <span class="highlight"> 03 </span>
                Brand Guide
              </a>
              <a class="nav-link" href="#">
                <span class="highlight"> 04 </span>
                Info Center
              </a>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
