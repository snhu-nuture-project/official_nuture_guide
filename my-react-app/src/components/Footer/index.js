import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";
import Logo from "../../images/snhuLogo.png";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="back-to-top">
            <a href="#navy">
              <FaArrowUp className="fas fa-chevron-up"></FaArrowUp>
            </a>
          </div>
          <div class="footer-content  animate-up">
            <p></p>
          </div>
          <div class="footer-content-divider animate-bottom">
            <div class="social-media">
              <img src={Logo} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
