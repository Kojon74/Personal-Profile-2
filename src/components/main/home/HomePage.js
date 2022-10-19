import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  AiFillCaretDown,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import ProfilePic from "../../../assets/profile-pic.jpg";
import Resume from "../../../assets/resume.pdf";

const HomePage = () => {
  return (
    <section className="home">
      <div className="left">
        <img className="pic" src={ProfilePic} alt="Profile" />
      </div>
      <div className="right">
        <h1 className="intro">
          Hi! I'm <span className="name">Ken</span>
        </h1>
        <h3 className="desc">
          {/* <span className="not">Not</span> just another software developer */}
        </h3>
        <div className="link-container">
          <a
            className="resume link"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <Link className="blog link" to="/blog">
            Blog
          </Link>
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/ken-john/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Kojon74" target="_blank" rel="noreferrer">
            <AiFillGithub className="social-icon" />
          </a>
          <a
            href="mailto: kenjohnson0704@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail className="social-icon" />
          </a>
        </div>
      </div>
      {/* <ScrollLink
        className="next-page"
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <p>Learn Why</p>
        <AiFillCaretDown className="down-icon" />
      </ScrollLink> */}
    </section>
  );
};

export default HomePage;
