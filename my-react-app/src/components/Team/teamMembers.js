// TeamMember.js
import React from "react";

const TeamMember = ({ image, name, role }) => (
  <div className="col-lg-3 d-flex flex-col">
    <img src={image} className="circle-image" alt={name} />
    <h4 className="text-center">{name}</h4>
    <p className="text-center">{role}</p>
  </div>
);

export default TeamMember;
