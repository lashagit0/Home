import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-sec">
      <h2 className="top-txt">About us</h2>
      <div className="about-wrapper">
        <div className="textside1">
          <h2>Our Company</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, itaque quibusdam. Sed fugit ipsa amet illo veniam
            cupiditate quod repellat nisi rerum mollitia magni eius voluptates
            quam quis, repellendus dolor modi excepturi consequatur et.
            Molestiae voluptatum optio cumque laborum corrupti quaerat ratione,
            aut quis, debitis iste consectetur qui, tempore necessitatibus?
          </p>
          <button>Learn More</button>
        </div>
        <div className="imgside"></div>
      </div>
    </div>
  );
};

export default About;
