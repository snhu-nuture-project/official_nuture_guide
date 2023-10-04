import React, { Component } from "react";
import umhbImg from "./images/umhb.jpg";
import UOT from "./images/bootcamp.png"
import "./style.css";

class Education extends Component {
  state = {
    Title: "University Ambassador",
    Title2:"NCAA Mens BasketBall",
    Description: "Recognized by campus leaders and peers and was elected in a prestigious role to represent the college campus. I was responsible for welcoming prospective students and their families to campus and assisting staff at events for new students. Lead tour groups throughout the school year. I coordinated with students and parents and accurately conveyed information about the University and aided if help was needed.",
    Description1: "Selected on the All American Team, Lead Team to the NCAA championship. Still hold the record for most rebounds recorded in a single game in all of ASC.",
    imgSrc : umhbImg,
    degree: "Major: Computer Information Systems"
  }


  changeUmhb = () => {
    this.setState({
      Title: "University Ambassador",
      Title2:"NCAA Mens BasketBall",
      Description: "Recognized by campus leaders and peers and was elected in a prestigious role to represent the college campus. I was responsible for welcoming prospective students and their families to campus and assisting staff at events for new students. Lead tour groups throughout the school year. I coordinated with students and parents and accurately conveyed information about the University and aided if help was needed.",
      Description1: "Selected on the All American Team, Lead Team to the NCAA championship. Still hold the record for most rebounds recorded in a single game in all of ASC.",
      imgSrc : umhbImg,
      degree: "Major: Computer Information Systems"
    })

  }


  changeUOTCert = () => {
    this.setState({
      Title: "",
      Title2:"",
      Description: "Completed 6 month program and earned a full stack certification for web development. Built Front end projects that enhance my knowledge of frameworks such as bootstrap, React and Materialize. Developed applications that showcased my knowledge and utilization of the grid layout and ensuring that all applications are mobile responsive. I also gained an extensive understanding of the DOM and how a document is accessed and manipulated (DOM).",
      Description1: "Learned how to utilize the Git command line and the Git workflow to push and pull projects from GitHub. Collaborated with developers to merge code and established coding ethics by inserting pseudo codes and Git commits that details the behavior and purpose of any added updates to joint projects",
      imgSrc : UOT,
      degree: "Full-Stack Certification"
    })

  }

  render() {

    

    return (
      <section class="eduSec" id="eduSec">
        <div class="row" className="education" id="education"></div>

        <div class="row">
          <div class="col-md-6 up">
            <h1 class="mtc">
              <span class="highlight">03</span> Education and Certifications
            </h1>
            <hr class="hrt" />
            <div class="eduPic">
              <img src={this.state.imgSrc} class="imgSwitch" />
            </div>
            <ul>
              <li>
                <h5 class="mtc edu umhb" onClick={this.changeUmhb}>University of Mary Hardin Baylor </h5>
                <p>August 2010 - May 2015</p>
              </li>

              <li>
                <h5 class="mtc edu uot" onClick={this.changeUOTCert}>
                  University of Texas <br />
                  <span>Coding Bootcamp Certificate Program</span>
                </h5>
                <p>September 2019- March 2020</p>
              </li>
            </ul>
            <img src="" class="cert" />
          </div>

          <div class="col-md-1"></div>

          <div class="col-md-5 ">
            <h4 class="edutext mtc degree">{this.state.degree}</h4>
            <h4 class="honor mtc">Achievements</h4>

            <p>
              <h6 class="alcolade mtc hover achTitle"><strong>{this.state.Title} </strong></h6>
            </p>
            <div>
              <div class="mtc fs1 achDes1">
                {this.state.Description}
                <br />
                <br/>
              </div>
              <p>
              <h6 class="alcolade mtc hover achTitle2"><strong>{this.state.Title2} </strong></h6>
            </p>
              <div class="mtc fs1 achDes1">
                {this.state.Description1}
                <br />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
