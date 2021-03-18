import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import sellingPts from "./sellingPts";

const AboutPage = () => {
  return (
    <section className="about" id="about">
      <div className="about-cont">
        {sellingPts.map((sellingPt) => {
          return (
            <div className="selling-pts" key={sellingPt.id}>
              <h2>{sellingPt.header}</h2>
              <p className="desc">{sellingPt.desc}</p>
              <p className="projects">
                Projects:{" "}
                <span className="projects-list">{sellingPt.projects}</span>
              </p>
            </div>
          );
        })}
      </div>
      <ScrollLink
        className="next-page"
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <p>See Projects</p>
        <AiFillCaretDown className="down-icon" />
      </ScrollLink>
    </section>
  );
};

export default AboutPage;
