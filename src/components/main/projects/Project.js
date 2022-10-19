import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  date,
  title,
  type,
  skills,
  desc,
  images,
  video,
  companyURL,
  githubURL,
  projectURL,
}) => {
  const formattedDate =
    date.length === 1 ? date[0] : [date[0], <br />, `- ${date[1]}`];
  return (
    <section className="project">
      <p className="date">{formattedDate}</p>
      <div className="project-container-outer">
        <span className="circle" />
        <div className="project-container">
          <div className="first-line">
            {projectURL ? (
              <a
                className="title"
                href={projectURL}
                target="_blank"
                rel="noreferrer"
              >
                {title}
                <FontAwesomeIcon className="link-icon" icon={faLink} />
              </a>
            ) : (
              <h5 className="title">{title}</h5>
            )}
            {githubURL && (
              <a
                className="github-link"
                href={githubURL}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className="github-icon" icon={faGithub} />
              </a>
            )}
          </div>
          {companyURL ? (
            <a
              className="type"
              href={companyURL}
              target="_blank"
              rel="noreferrer"
            >
              {type}
              <FontAwesomeIcon className="link-icon-sm" icon={faLink} />
            </a>
          ) : (
            <h6 className="type">{type}</h6>
          )}
          <p className="skills">
            <b>Tags: </b>
            {skills.map((skill, index) =>
              index === skills.length - 1 ? skill : `${skill}, `
            )}
          </p>
          <ul className="desc">
            {desc.map((item) => (
              <li className="desc-item">{item}</li>
            ))}
          </ul>
          <div className="media-container">
            {video && (
              <iframe
                className="media"
                width="500"
                height="300"
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            {images.map(({ id, src, alt }) => (
              <img className="media" id={id} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
