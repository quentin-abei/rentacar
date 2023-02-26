import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import { FaArrowAltCircleUp, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div className="about_main">
      <div className="about_container">
        <div className="about_infos">
          <a href="https://www.linkedin.com/in/quentinndato/" rel="noreferrer" target="_blank">
            Linkedin
            <FaLinkedinIn className="about_logo"/>
          </a>
          <a href="https://github.com/quentin-abei" rel="noreferrer" target="_blank">
            GitHub
            <FaGithub className="about_logo" />
          </a>
          <a className="about_logo" href="https://github.com/quentin-abei" rel="noreferrer" target="_blank">Made with love by @0xHelium</a>
        </div>
        
        <div className="links">
          <Link className="about_links" to="/">
            <FaArrowAltCircleUp className="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
