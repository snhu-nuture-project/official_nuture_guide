import React, { Component } from "react";
import "./style.css";
import Empimage from  "./images/emp.gif"
import LogixImg from "./images/logix-logo.png"
import CapImg from "./images/Capco.jpg"
import { FaArrowDown } from "react-icons/fa"
class Work extends Component {

  
state =  {
duty: "Collaborates with Dev Ops in  developing websites for clients ensuring that specific requirements are configured appropriately to meet business needs for over 250,000 employees",
duty2: "Process Improvement: Oversaw the premium reporting process – after noticing the start to finish process – identified inefficiencies by creating automated queries and increasing time savings by 40% (22 hours a month). Wrote, designed, and published 60 guides for process utilization – ensuring start to finish understanding of all tasks and training.",
duty3: "Spearheads system issues by utilizing agile methodology to complete projects and meeting specific deadlines. I was able to improve our Premium Reporting Process and saved the company over 16 hours of time allocated to this task by developing complex queries using SQL Server that reduced processing time to 4 hours.",
duty4: "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
imgsrc: Empimage
}
 

changeDutyLogix = () => {
  this.setState({
    duty: "Acts as the critical point of contact for standard laboratory procedures requiring the use of sterile technique, processing samples, and preparing slides. Analyzed patient requisitions to ensure accuracy with a 98% success rate",
    duty2: "Responsible for daily, weekly, and monthly administration of the itineraries for delivery drivers.Analyzed high traffic volumes in comparison to inventory ensuring all deliverables were completed prior to facility closures.",
    duty3: "Medical Coding & Billing: Maintained over 150 patient records a day and ensured that medical coding was carefully and accurately transmitted to the database in order to avoid patient misdiagnosis",
    duty4: "Metric Adherence: Monitored real-time call statistics schedule adherence, and communicated with an internal and outsourced team to ensure on-phone and off-phone activity managed efficiently throughout the day ",
    imgsrc: LogixImg

  })

}
changeEmpDuty = () => {
this.setState({
  duty: "Collaborates with Dev Ops in  developing websites for clients ensuring that specific requirements are configured appropriately to meet business needs for over 250,000 employees",
  duty2: "Process Improvement: Oversaw the premium reporting process – after noticing the start to finish process – identified inefficiencies by creating automated queries and increasing time savings by 40% (22 hours a month). Wrote, designed, and published 60 guides for process utilization – ensuring start to finish understanding of all tasks and training.",
  duty3: "Spearheads system issues by utilizing agile methodology to complete projects and meeting specific deadlines. I was able to improve our Premium Reporting Process and saved the company over 16 hours of time allocated to this task by developing complex queries using SQL Server that reduced processing time to 4 hours.",
  duty4: "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
  imgsrc: Empimage
  })
}

changeCapcoDuty = () => {
  this.setState({
    duty: "Collaborates with Dev Ops in  developing websites for clients ensuring that specific requirements are configured appropriately to meet business needs for over 250,000 employees",
    duty2: "Process Improvement: Oversaw the premium reporting process – after noticing the start to finish process – identified inefficiencies by creating automated queries and increasing time savings by 40% (22 hours a month). Wrote, designed, and published 60 guides for process utilization – ensuring start to finish understanding of all tasks and training.",
    duty3: "Spearheads system issues by utilizing agile methodology to complete projects and meeting specific deadlines. I was able to improve our Premium Reporting Process and saved the company over 16 hours of time allocated to this task by developing complex queries using SQL Server that reduced processing time to 4 hours.",
    duty4: "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
    imgsrc: CapImg
    })
  }

  render() {
    return (
      <section className="workExp" id="workExp">
         <div className="row" id="workSec"></div>
        <div className="row">
          <div className="col-md-5 up bl">
            <h1 className="mtc">
              <span className="highlight">02</span> Work Experience
            </h1>
            <hr className="hrt" />
            <img src={this.state.imgsrc} alt="imageEmp" className="expSwitch" />
            <ul>
            
              <li>
                <h5 className="mtc edu empyrean" onClick={this.changeEmpDuty}>
                  <span className="dutyHighlightEmp">Empyrean Benefits Solutions </span>
                </h5>
                <p>May 2018 - Present</p>
              </li>
              <li>
                <h5 className="mtc edu logix" onClick={this.changeDutyLogix}><span className="dutyHighlightEmp">Logix Diagnostics</span></h5>
                <p>August 2017- May 2018</p>
              </li>
            </ul>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-6 up">
            <h3 className="mtc">Responsibilties</h3>

            <div>
              <ul className="mtc">
                <li className="duty">
                 {this.state.duty}
                </li>
                <br />
                <li className="duty2">
                  {this.state.duty2}
                </li>
                <br />
                <li className="duty3">
                {this.state.duty3}
                </li>
                <br />
                <li className="duty4">
                {this.state.duty4}
                </li>
                <br />
                
              </ul>
            </div>
          </div>
        </div>

        <a href="#education"><FaArrowDown className="ArrowDown"  /></a>
      </section>
    );
  }
}

export default Work;
