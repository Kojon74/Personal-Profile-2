import { useHistory, useRouteMatch } from "react-router-dom";
import Skincare from "../../assets/skincare.jpg";

const BlogPostCard = (blogPost) => {
  const { id, docId, title, subtitle, datePosted } = blogPost;
  const { url } = useRouteMatch();
  let history = useHistory();

  const handleClick = () => {
    history.push({ pathname: `${url}/${docId}`, state: { ...blogPost } });
  };

  return (
    <section className="blog-post-card" onClick={handleClick}>
      <img className="img" src={Skincare} alt="Blog Post" />
      <p className="date">{datePosted.toDateString()}</p>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </section>
  );
};

export default BlogPostCard;
