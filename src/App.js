import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import ProjectsPage from "./components/projects/ProjectsPage";

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default App;
