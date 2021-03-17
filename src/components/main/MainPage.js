import React from "react";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import ProjectsPage from "./projects/ProjectsPage";

const MainPage = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default MainPage;
