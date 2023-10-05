import React, { Component } from "react";
import AccordionGif from "./assets/accordion.gif";
import bGif from "./assets/blo.png";
import $ from "jquery";
import "./styles.css";

class ComponentLib extends Component {
  copyToClipboard = () => {
    const codeBox = document.querySelector(".code-box pre");
    const textArea = document.createElement("textarea");
    textArea.value = codeBox.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Code copied to clipboard!");
  };

  state = {
    title: "Accordion",
    code: "Hover the cards for more details and to view the code or the site. Enter the gif you want to see appear and the bottom of the screen Stickers are animate",
    image: AccordionGif,
  };

  changeAccordion = () => {
    this.setState({
      title: "Accordion",
      code: "code block coming soon",
      image: { AccordionGif },
      isButtonActive: true,
    });
  };

  changeButtons = () => {
    this.setState({
      title: "Buttons",
      code: "code block coming soon",
      image: { bGif },
      isButtonActive: true,
    });
    this.toggleActiveClass();
  };

  changeFooter = () => {
    this.setState({
      title: "Footer",
      code: "code block coming soon",
    });
  };

  changeNavBar = () => {
    this.setState({
      title: "Navigation Bar",
      code: "code block coming soon",
    });
  };

  changeAccrediation = () => {
    this.setState({
      title: "Accrediation",
      code: "code block coming soon",
    });
  };

  render() {
    const buttonClassName = this.state.isButtonActive
      ? "btn btn-primary active"
      : "btn btn-primary";

    return (
      <section className="component-lib" id="about">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="text-center">Component Library</h1>
            <p className="text-center">
              {" "}
              Here is a list of the most common components we use. If you are
              using the starter template all of the styles have been applied and
              you will simply click the components you wish to use, copy and
              paste the code provided onto your local machine.
            </p>
            <div className="d-flex justify-content-center btn-group com-btn">
              <button
                className={buttonClassName}
                onClick={this.changeAccordion}
              >
                Accordian{" "}
              </button>
              <button className={buttonClassName} onClick={this.changeButtons}>
                {" "}
                Buttons{" "}
              </button>
              <button className="btn-primary btn " onClick={this.changeFooter}>
                {" "}
                Footer{" "}
              </button>
              <button className="btn-primary btn" onClick={this.changeNavBar}>
                {" "}
                Nav Bar{" "}
              </button>
              <button
                className="btn-primary btn"
                onClick={this.changeAccrediation}
              >
                {" "}
                Accredation{" "}
              </button>
              <button
                className="btn-primary btn"
                onClick={this.changeAccrediation}
              >
                {" "}
                Forms{" "}
              </button>
            </div>
            <hr className="hrt" />
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-6
            "
          >
            <h2> {this.state.title} </h2>
            <div class="code-box">
              <button class="copy-button" onClick={this.copyToClipboard}>
                Copy
              </button>
              <br></br>
              <br></br>
              <pre>{this.state.code}</pre>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Example</h2>
            <img src={this.state.image} className="w-100 example-img" />
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentLib;
