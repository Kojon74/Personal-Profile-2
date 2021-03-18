import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const BlogPostCard = (blogPost) => {
  const { id, title, subtitle, datePosted, image } = blogPost;
  const { url } = useRouteMatch();
  let history = useHistory();

  const handleClick = () => {
    history.push({ pathname: `${url}/${id}`, state: { ...blogPost } });
  };

  return (
    <section className="blog-post-card" onClick={handleClick}>
      <img className="img" src={image} alt="Blog Post" />
      <p className="date">{datePosted}</p>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </section>
  );
};

export default BlogPostCard;
