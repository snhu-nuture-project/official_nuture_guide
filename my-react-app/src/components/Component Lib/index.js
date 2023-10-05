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
    code: "Click one of the components above",
    image: AccordionGif,
  };

  changeAccordion = () => {
    this.setState({
      title: "Accordion",
      code: '<div class="accordion-item mt-4">' +
      '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"' +
       ' data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flushThree">' +
        '<h4 class="accordion-header">'+
         ' Whats the difference between financial aid loans and grants?'+
        '</h4> </button>'+
      '<div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">'+
        '<div class="accordion-body">'+
          '<p>'+
          '<ul>'+
           ' <li><strong>Grants</strong> are awarded funds that DO NOT have to be paid back.<sup>*</sup> Most '+
              'graduate students do not qualify for federal grants.</li>'+
            '<li><strong>Loans</strong> are borrowed funds that DO have to be paid back</li>'+
          '</ul>'+
          '</p>'+
          '<p style="font-size: .75rem"><sup>*</sup>Students who fail to complete the academic period for which the'+
           ' Federal Pell Grant was offered will be asked to pay back a portion of the grant.</p>'+
        '</div>'+
      '</div>'+
    '</div>,',
      image: { AccordionGif },
    });
  };

  changeButtons = () => {
    this.setState({
      title: "Buttons",
      code: "code block coming soon",
      image: { bGif },
    });
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
      <section className="component-lib" id="component-lib">
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
            <div className="d-flex justify-content-center btn-group com-btn col-md-12">
              
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
