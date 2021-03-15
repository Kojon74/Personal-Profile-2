import React from "react";
import { div } from "react-router-dom";
import ProfilePic from "../../assets/profile-pic.jpg";
import Resume from "../../assets/resume.pdf";

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
          <span className="not">Not</span> just another software developer
        </h3>
        <a className="resume" href={Resume} target="_blank">
          Resume
        </a>
      </div>
      <div className="next-page" to="/about">
        <p>Learn why</p>
      </div>
    </section>
  );
};

export default HomePage;
