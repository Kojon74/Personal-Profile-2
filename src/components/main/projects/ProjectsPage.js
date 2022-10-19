import React from "react";
import projects from "../../../data";
import Project from "./Project";

// const PROJECT_TYPES = [
//   "Work Experience",
//   "Hackathon",
//   "Personal Project",
//   "Class Project",
// ];
// const LANGUAGE_FRAMEWORK = ["Python", "JavaScript", "React", "Java"];
// const TOOLS = ["Firebase", "Azure", "AWS", "Expo", "Figma"];

const ProjectsPage = () => {
  // const [selectedFilter, setSelectedFilter] = useState([]);
  // const handleFilterClick = (type) => {
  //   if (selectedFilter.includes(type)) {
  //     setSelectedFilter(selectedFilter.filter((curType) => curType !== type));
  //   } else setSelectedFilter([...selectedFilter, type]);
  // };

  return (
    <section className="projects" id="projects">
      <h2 className="header">
        Projects
        <div className="underline" />
      </h2>
      {/* {[
        { filterArray: PROJECT_TYPES, name: "Project Types" },
        { filterArray: LANGUAGE_FRAMEWORK, name: "Languages & Frameworks" },
        { filterArray: TOOLS, name: "Tools" },
      ].map(({ filterArray, name }) => (
        <div className="filter-row">
          <h3 className="filter-subhead">{name}</h3>
          {filterArray.map((type, i) => (
            <button
              className={`filter-btn ${
                selectedFilter.includes(type) && "filter-selected"
              }`}
              key={i}
              onClick={() => handleFilterClick(type)}
            >
              {type}
            </button>
          ))}
        </div>
      ))} */}
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </section>
  );
};

export default ProjectsPage;
