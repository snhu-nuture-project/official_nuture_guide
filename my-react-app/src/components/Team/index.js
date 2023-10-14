import React, { Component } from "react";
import TeamMember from "./teamMembers";
import "./styles.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);

const teamMembers = [
  {
    image: images[15],
    name: "John Wright",
    role: "Senior Director of Nurture Marketing",
  },
  {
    image: images[3],
    name: "Shannen Batula",
    role: "Marketing Technology Operations",
  },
  {
    image: images[0],
    name: "Meagan Karr",
    role: "MarTech Performance Strategist",
  },
  {
    image: images[1],
    name: "Chris Park",
    role: "Marketing Automation Solutions Architect",
  },
  {
    image: images[2],
    name: "Monique Almeida",
    role: "Marketing Technology Specialist",
  },
  {
    image: images[4],
    name: "Emily Buhl",
    role: "Marketing Automation Manager",
  },
  {
    image: images[5],
    name: "Charles Cook",
    role: "Senior Director of Funnel Operations",
  },
  {
    image: images[6],
    name: "Rachel Cusumano",
    role: "Marketing Automation Manager - Solutions",
  },
  {
    image: images[7],
    name: "Paul Donovan",
    role: "Creative Director",
  },
  {
    image: images[8],
    name: "Mark Franklin",
    role: "Growth Marketing Manager",
  },
  {
    image: images[9],
    name: "Susie Howard",
    role: "Art Director",
  },
  {
    image: images[10],
    name: "Kitrick Bell",
    role: "Front-end Developer",
  },
  {
    image: images[11],
    name: "Patty Lopez",
    role: "Marketing Automation Manager",
  },
  {
    image: images[12],
    name: "Alexis Mitchell",
    role: "Marketing Automation Specialist",
  },
  {
    image: images[13],
    name: "William Mullaney",
    role: "Marketing Technology Operations Manager",
  },
  {
    image: images[14],
    name: "Tiffany Sorensen",
    role: "Nuture Copywriter",
  },
];

class Team extends Component {
  render() {
    return (
      <section className="team-section" id="team-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className="text-center mb-5">Meet the Team!</h1>
          </div>

          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    );
  }
}

export default Team;
