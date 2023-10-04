import React, { Component } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./styles.css";

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="row" id="aboutSec"></div>

        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 down bl">
            <h1 className="mtc">
              <span className="highlight mr">01</span>About Me
            </h1>

            <hr className="hrt" />

            <p>
              Hello My name is <span className="highlight"> Kitrick Bell </span>
              and I am a Web developer out of Houston TX. I enjoy learning about
              Web development. I enjoy taking projects from the start and
              working on them ultimately seeing the final project come to life.
              My goal is to help others jump start their business with beautiful
              designs and responsive sites.{" "}
            </p>
            <p>
              I earned my certification through{" "}
              <span className="highlight">
                University of Texas Coding BootCamp
              </span>{" "}
              where I learned about Front end and back end development.
            </p>
            <p>
              <a href="#skill">Click Here</a> to view my Skills{" "}
            </p>
          </div>
        </div>

        <a href="#workSec">
          <FaArrowDown className="ArrowDown" />
        </a>
      </section>
    );
  }
}

export default About;
