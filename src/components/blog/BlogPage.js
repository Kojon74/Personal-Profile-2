import { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import "./index.css";
import Navbar from "./Navbar";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(getFirestore(), "blog-posts"),
        orderBy("datePosted", "desc")
      ),
      (snap) => {
        setBlogPosts(
          snap.docs.map((doc) => ({
            ...doc.data(),
            docId: doc.id,
            datePosted: doc.data().datePosted.toDate(),
          }))
        );
      }
    );
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
