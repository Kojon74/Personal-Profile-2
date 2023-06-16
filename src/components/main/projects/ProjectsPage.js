import { Card } from "react-bootstrap";
import projects from "../../../data";
import "./Projects.css";

const ProjectsPage = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="header">
        Projects
        <div className="underline" />
      </h2>
      <div className="card-cont">
        {projects.map((project) => (
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={project.images[0].src}
            />
            <Card.Body>
              <Card.Title className="card-title">{project.title}</Card.Title>
              <Card.Text>{project.intro}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
