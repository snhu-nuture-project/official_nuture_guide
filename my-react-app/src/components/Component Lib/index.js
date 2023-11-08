import React, { Component } from "react";
import AccordionGif from "./assets/accordion.gif";
import footer from "./assets/footer.png";
import nav from "./assets/nav.png";
import accred from "./assets/accred.png";
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
    title: "Code Block",
    code: "Click one of the components buttons",
    image: AccordionGif,
    example: "",
    work: "Here is a list of the most common components we use. If you are using the starter template all of the styles have been applied and you will simply click the components you wish to use, copy and paste the code provided onto your local machine.",
  };

  changeAccordion = () => {
    this.setState({
      title: "Accordion",
      code: `
        <div class="accordion-item mt-4">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flushThree">
        <h4 class="accordion-header"> 
        Whats the difference between financial aid loans and grants? 
        </h4> </button> 
        <div id="flush-collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"> 
        <div class="accordion-body"> 
        <p> 
        <ul> 
         <li><strong>Grants</strong> are awarded funds that DO NOT have to be paid back.<sup>*</sup> Most  
        graduate students do not qualify for federal grants.</li> 
        <li><strong>Loans</strong> are borrowed funds that DO have to be paid back</li> 
        </ul> 
        </p> 
        <p style="font-size: .75rem"><sup>*</sup>Students who fail to complete the academic period for which the 
         Federal Pell Grant was offered will be asked to pay back a portion of the grant.</p> 
        </div> 
        </div> 
        </div>`,
      image: AccordionGif,
      work: "The accordion uses collapse internally to make it collapsible",
      example: "",
    });
  };

  changeButtons = () => {
    this.setState({
      title: "Buttons",
      code: ` <button class="btn btn-primary">Primary</button>`,
      image: "",
      work: "Buttons for your project, for different colors replace the class name, for example if you want to use a primary button use 'btn-primary'",
      example: [
        <button className="btn btn-primary mr-3">Primary</button>,
        <button className="btn btn-secondary">Secondary</button>,
      ],
    });
  };

  changeFooter = () => {
    this.setState({
      title: "Footer",
      code: `<footer class="container-fluid" style="background-color: #00244E;">
      <div class="col-10 d-flex flex-wrap justify-content-between align-items-center px-3 px-md-5 py-5 mx-auto">
        <p class="col-md-4 lh-lg" style="color:#fff"><strong>SNHU Student Financial Services</strong><br>
          2500 North River Road, Manchester, NH 03106<br>
           Phone: 877.455.7648<br>
           advising@snhu.edu</p>
        <a href="https://www.snhu.edu/" target="_blank"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img
            src="https://client-data.knak.io/production/email_assets/5fd10b569d941/Y9PaAR4BN1uvwQSeUR37Jtdwa2YUrN1By1RZIsk8.png"
            height="80" alt="SNHU logo">
        </a>
        </a>
        <p class="col-md-4 justify-content-end lh-lg text-md-end" style="color: #fff;">
          © 2023<br>
          Southern New Hampshire University<br>
          View our <a href="https://www.snhu.edu/privacy-policy" class="text-link">Privacy Policy</a> | <a
            href="https://www.snhu.edu/about-us/accessibility" class="text-link">Accessibility at SNHU</a>
        </p>
      </div>
    </footer>`,
      image: footer,
      work: " used to provide additional information or navigation options for the website's visitors. The footer is a common and important element of web design, and its content can vary depending on the purpose and structure of the website. Here's an explanation of the common components and purposes of a website footer",
      example: "",
    });
  };

  changeNavBar = () => {
    this.setState({
      title: "Navigation Bar",
      code: ` <nav class="navbar navbar-expand-lg p-3">
      <div class="container">
        <a class="navbar-brand" href="https://www.snhu.edu/">
          <img
            src="https://client-data.knak.io/production/email_assets/5fd10b569d941/Y9PaAR4BN1uvwQSeUR37Jtdwa2YUrN1By1RZIsk8.png"
            alt="SNHU Logo" height="80">
        </a>
        <div class=" justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a href="#" class="nav-link head-link mx-3" target="_blank">Text</a>
            <a href="#" class="nav-link head-link mx-3 " target="_blank">Call</a>

          </div>
        </div>
      </div>
    </nav>`,
      image: nav,
      work: "common user interface element in web design that typically appears at the top of a web page. Its primary purpose is to provide navigation and quick access to different sections of a website, allowing users to easily move between pages or access key features",
      example: "",
    });
  };

  changeAccrediation = () => {
    this.setState({
      title: "Accrediation",
      code: ` <div role="region" aria-label="Accreditations" class="container-fluid align-items-center text-center py-5 bg-light accreditation">
      <img class="col-10 col-xxl-6"
        src="https://client-data.knak.io/production/email_assets/5fd10b569d941/URLXxrrgwra1n8IolHbmjqoC3cLBsPysUnEDKV6p.png"
        alt="SNHU accreditation logos" width="100%" height="auto">
    </div>`,
      image: accred,
    });
  };

  changeForm = () => {
    this.setState({
      title: "Forms",
      code: `code coming soon`,
      image: "",
      work: "Form elements are crucial components of web pages that allow users to input and submit data. Forms are used for various purposes, including user registration, login, search, data submission, and more.",
    });
  };

  render() {
    const buttonClassName = this.state.isButtonActive
      ? "btn btn-primary active com-btn"
      : "btn btn-primary com-btn";

    return (
      <section className="component-lib" id="component-lib">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>Component Library</h1>
            <p className="text-center"> </p>

            <hr className="hrt" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>How it works</h2>
            <div className="d-flex justify-content-center btn-group col-md-12 mb-2">
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
              <button
                className="btn-primary btn com-btn "
                onClick={this.changeFooter}
              >
                {" "}
                Footer{" "}
              </button>
            </div>
            <div className="col-md-12 d-flex justify-content-center btn-group ">
              <button
                className="btn-primary btn com-btn"
                onClick={this.changeNavBar}
              >
                {" "}
                Nav Bar{" "}
              </button>
              <button
                className="btn-primary btn com-btn"
                onClick={this.changeAccrediation}
              >
                {" "}
                Accredation{" "}
              </button>
              <button
                className="btn-primary btn com-btn"
                onClick={this.changeForm}
              >
                {" "}
                Forms{" "}
              </button>
            </div>
            <p className="text-center">{this.state.work}</p>
            <h2>Example</h2>
            <div className="d-flex justify-content-center">
              {this.state.example}
            </div>
            <img src={this.state.image} className="w-100 example-img" />
          </div>

          <div
            className="col-md-6
            "
          >
            <h2 className="text-center"> {this.state.title} </h2>
            <div class="code-box">
              <button class="copy-button" onClick={this.copyToClipboard}>
                Copy
              </button>
              <br></br>
              <br></br>
              <pre>{this.state.code}</pre>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentLib;
