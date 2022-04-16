import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import CodeBlock from "./CodeBlock";
import Skincare from "../../assets/skincare.jpg";
import "./index.css";
import { db, storage } from "../../firebase";
import { useHistory } from "react-router-dom";

const EditPage = () => {
  let history = useHistory();

  const [id, setId] = useState(uuidv4());
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [progressVid, setProgressVid] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    console.log("yello");
    e.preventDefault();
    storage
      .ref()
      .child(`memes/${id}.png`)
      .put(image)
      .then((snap) => {
        setImage(null);
      })
      .catch((err) => console.error(err));
    storage
      .ref()
      .child(`progress/${id}.mov`)
      .put(progressVid)
      .then((snap) => {
        setProgressVid(null);
      })
      .catch((err) => console.error(err));
    db.collection("blog-posts")
      .add({
        id: id,
        title: title,
        subtitle: subtitle,
        datePosted: new Date().toDateString(),
        dateUpdated: new Date().toDateString(),
        content: text,
        image: Skincare,
      })
      .then((snap) => {
        setId(uuidv4());
        setTitle("");
        setSubtitle("");
        setText("");
      })
      .catch((err) => console.error(err));
    history.push({ pathname: "blog" });
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
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
        <label>Meme</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <label>Progress</label>
        <input
          type="file"
          onChange={(e) => setProgressVid(e.target.files[0])}
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
