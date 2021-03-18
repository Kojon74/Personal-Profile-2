import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="blog-nav">
      <Link className="header" to="/blog">
        Ken's Blog
      </Link>
      <div className="contact">
        <Link className="link " to="/">
          Portfolio
        </Link>
        <a
          href="https://www.linkedin.com/in/ken-john/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/Kojon74" target="_blank" rel="noreferrer">
          <AiFillGithub className="social-icon" />
        </a>
        <a
          href="mailto: kenjohnson0704@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMail className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
