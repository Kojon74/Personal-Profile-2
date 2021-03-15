import React from "react";
import projects from "../../data";
import Project from "./Project";

const ProjectsPage = () => {
  return (
    <section className="projects">
      <h2 className="header">
        Projects
        <div className="underline" />
      </h2>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </section>
  );
};

export default ProjectsPage;
