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
            we are dedicated to helping you find your perfect home or investment
            property. With a deep understanding of the local market and years of
            expertise, we provide personalized service tailored to your needs.
            Whether you're buying, selling, or renting, our team of
            knowledgeable agents is here to guide you through every step of the
            process. Trust us to make your real estate journey smooth and
            successful. Welcome to where your dream property becomes a reality.
          </p>
          <button>Learn More</button>
        </div>
        <div className="imgside"></div>
      </div>
    </div>
  );
};

export default About;
