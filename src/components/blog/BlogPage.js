import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import BlogPostCard from "./BlogPostCard";
import "./index.css";
import Navbar from "./Navbar";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection("blog-posts")
      .orderBy("datePosted")
      .onSnapshot((snap) => {
        setBlogPosts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    return unsub;
  }, []);

  return (
    <section className="blog">
      <Navbar />
      <p className="slogan">
        Follow the adventures of <span className="highlight">NOT</span> just
        another software developer.
      </p>
      <div className="blog-card-cont">
        {blogPosts.map((blogPost) => (
          <BlogPostCard key={blogPost.id} {...blogPost} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
