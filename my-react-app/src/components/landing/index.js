import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import "./styles.css";
import snhuMarket from '../../images/animation_lnc0moq3.json'
import { FaArrowDown } from "react-icons/fa";

class Landing extends Component {
  render() {
    return (
      <section className="beginning" id="beginning">
        <div className="row">
          <div className="col-md-6">
            <h1 className="name ">Welcome to Nuture Marketing </h1>
            <h3>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString(
                      '<span style="color:#fdb913; font-family: Oswald, sans-serif; font-size: 2rem;"> Development Guide</span>'
                    )
                    .start();
                }}
              ></Typewriter>
            </h3>
            <br />
            <p>
              Make use of this manual as a starting point for your Nuture
              projects. Simply make a copy of the beginning template, which
              already has the fundamental override styles customized for the
              SNHU Brand.
            </p>
            <button className="btn btn-primary">
              {" "}
              <a href="https://kibell.github.io/My-Portfolio/project.html">
                Starter Template download{" "}
              </a>{" "}
            </button>
          </div>

          <div class="col-md-6">
          <Lottie animationData={snhuMarket} loop={true} className="marketing" />
          </div>
        </div>

        {/* <a href="#aboutSec">
          <FaArrowDown className="ArrowDown" />
        </a> */}
      </section>
    );
  }
}

export default Landing;
