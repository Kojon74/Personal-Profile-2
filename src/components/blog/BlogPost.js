import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../edit/CodeBlock";
import { storage } from "../../firebase";
import Navbar from "./Navbar";

const BlogPost = () => {
  const [meme, setMeme] = useState(null);
  const location = useLocation();

  const {
    id,
    title,
    subtitle,
    datePosted,
    dateUpdated,
    content,
  } = location.state;

  useEffect(() => {
    storage
      .ref()
      .child(`memes/${id}.png`)
      .getDownloadURL()
      .then((url) => {
        setMeme(url);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <section className="blog-post">
      <Navbar />
      <div className="content">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p>
          Posted: {datePosted}, Last updated: {dateUpdated}
        </p>
        <img src={meme} alt="No meme of the week" />
        <h3>Meme of the week</h3>
        <ReactMarkdown className="markdown" renderers={{ code: CodeBlock }}>
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
