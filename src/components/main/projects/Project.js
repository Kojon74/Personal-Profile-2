import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CustomCarousel from "./CustomCarousel";

const Project = ({
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
}) => {
  const formattedDate = date.length === 1 ? date[0] : `${date[0]} - ${date[1]}`;
  return (
    <div className="project">
      <CustomCarousel images={images} />
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
              {typeName}
              <FontAwesomeIcon className="link-icon-sm" icon={faLink} />
            </a>
          ) : (
            <h6 className="type">{typeName}</h6>
          )}
          <p>{formattedDate}</p>
          <p className="skills">
            <b>Tags: </b>
            {skills.map((skill, index) => (
              <p style={{ display: "inline" }}>
                {index === skills.length - 1 ? skill : `${skill}, `}
              </p>
            ))}
          </p>
          <ul className="desc">
            {desc.map((item) => (
              <li className="desc-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
