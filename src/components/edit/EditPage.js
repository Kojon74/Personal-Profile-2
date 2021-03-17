import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import "./index.css";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="edit">
      <form>
        <label>Blog post title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog post subtitle</label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <textarea
          className="content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ReactMarkdown className="markdown" renderers={{ code: CodeBlock }}>
          {text}
        </ReactMarkdown>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPage;
