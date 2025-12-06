import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";
import AllProjects from "./components/AllProjects"; // <-- import your page

function HomePage() {
  return (
    <>
      <Layout>
        <div id="about">
          <AboutSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="resume">
          <ResumeSection />
        </div>

        <div id="projects">
          <ProjectSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </Layout>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}
