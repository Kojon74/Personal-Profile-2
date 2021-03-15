import React from "react";
import sellingPts from "./sellingPts";

const AboutPage = () => {
  return (
    <section className="about">
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
    </section>
  );
};

export default AboutPage;
