import React from "react";
import { useParams } from "react-router";

const BlogPost = () => {
  const { blogId } = useParams();
  return <h1>{blogId}</h1>;
};

export default BlogPost;
