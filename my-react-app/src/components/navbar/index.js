import React, { Component, Fragment } from "react";
import snhuLogo from "../../images/snhuLogo.png";
import Fade from "react-reveal/Fade";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg m-5" id="navy">
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
              <Fade delay={4000} duration={4000} left>
                <a class="nav-link" href="#landing">
                  <span class="highlight"> 01 </span> Home{" "}
                  <span class="sr-only">(current)</span>
                </a>
              </Fade>
              <Fade delay={3000} duration={4000} left>
                <a class="nav-link" href="#component-lib">
                  {" "}
                  <span class="highlight"> 02 </span>
                  Components
                </a>
              </Fade>

              <Fade delay={2000} duration={4000} left>
                <a class="nav-link" href="https://brand.snhu.edu/d/hvaxQ3qRLmXv/snhu-brand-guide#/introduction/how-to-use-this-guide">
                  <span class="highlight"> 03 </span>
                  Brand Guide
                </a>
              </Fade>
              <Fade duration={4000} left>
                <a class="nav-link" href="#team-section">
                  <span class="highlight"> 04 </span>
                  Team
                </a>
              </Fade>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
