import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../edit/CodeBlock";
import Navbar from "./Navbar";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const BlogPost = () => {
  const [meme, setMeme] = useState(null);
  const [progress, setProgress] = useState(null);

  const location = useLocation();

  const { id, docId, title, subtitle, datePosted, content } = location.state;

  useEffect(() => {
    (async () => {
      const memeUrl = await getDownloadURL(
        ref(getStorage(), `memes/${id}.png`)
      );
      setMeme(memeUrl);
      const progressUrl = await getDownloadURL(
        ref(getStorage(), `progress/${id}.mov`)
      );
      setProgress(progressUrl);
    })();
  }, [id]);

  return (
    <section className="blog-post">
      <Navbar />
      <div className="content">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p>Posted: {datePosted.toDateString()}</p>
        <h3>Meme of the week</h3>
        <img src={meme} alt="No meme of the week" />
        <h3>Progress video</h3>
        <video width="750" height="500" controls>
          <source src={progress} type="video/quicktime" />
        </video>
        <ReactMarkdown className="markdown" renderers={{ code: CodeBlock }}>
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
