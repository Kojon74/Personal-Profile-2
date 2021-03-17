import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BlogPost from "./BlogPost";
import BlogPostCard from "./BlogPostCard";
import data from "./data";
import "./index.css";

const BlogPage = () => {
  const { path } = useRouteMatch();

  return (
    <section className="blog">
      <div>
        <h1>Ken's Blog</h1>
        <p>Follow the adventures of NOT just another software developer.</p>
        <div className="underline" />
      </div>
      <div className="blog-card-cont">
        {data.map((blogPost) => (
          <BlogPostCard key={blogPost.id} {...blogPost} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
