import projects from "../../../data";
import Filter from "./Filter";
import Project from "./Project";
import "./Projects.css";

const ProjectsPage = () => {
  return (
    <section className="projects" id="projects">
      <h1>Technical Experience</h1>
      {/* <Filter /> */}
      {projects.map(
        ({
          date,
          title,
          type,
          typeName,
          skills,
          desc,
          images,
          video,
          companyURL,
          githubURL,
          projectURL,
        }) => (
          <Project
            date={date}
            title={title}
            type={type}
            typeName={typeName}
            skills={skills}
            desc={desc}
            images={images}
            video={video}
            companyURL={companyURL}
            githubURL={githubURL}
            projectURL={projectURL}
          />
        )
      )}
    </section>
  );
};

export default ProjectsPage;
