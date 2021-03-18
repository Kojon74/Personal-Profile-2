import React from "react";

const Project = ({ date, title, type, skills, desc, url, images, video }) => {
  const formattedDate =
    date.length === 1 ? date[0] : [date[0], <br />, `- ${date[1]}`];
  return (
    <section className="project">
      <p className="date">{formattedDate}</p>
      <div className="project-container-outer">
        <span className="circle" />
        <div className="project-container">
          <h5 className="title">{title}</h5>
          <h6 className="type">{type}</h6>
          <p className="skills">
            <b>Skills: </b>
            {skills.map((skill, index) =>
              index === skills.length - 1 ? skill : `${skill}, `
            )}
          </p>
          <ul className="desc">
            {desc.map((item) => (
              <li className="desc-item">{item}</li>
            ))}
          </ul>
          <a className="url" href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
          <div className="media-container">
            {images.map(({ id, src, alt }) => (
              <img className="media" id={id} src={src} alt={alt} />
            ))}
          </div>
          <div className="media-container">
            {video.map(({ id, src, alt }) => (
              <video
                className="media"
                id={id}
                src={src}
                alt={alt}
                autoplay="autoplay"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
