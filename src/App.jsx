import React from "react";
import Layout from "./Layout";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";

// export default function App() {
//   return (
//     <Layout>
//       <div id="about">
//         <AboutSection />
//       </div>
//       <div id="resume">
//         <ResumeSection />
//       </div>
//       <div id="projects">
//         <ProjectSection />
//       </div>
//       <div id="skills">
//         <SkillsSection />
//       </div>
//       <div id="contact">
//         <ContactSection />
//       </div>
//       <Footer />
//     </Layout>
//   );
// }

export default function App() {
  return (
    <>
      <Layout>
        <div id="about">
          <AboutSection />
        </div>

        <div id="resume">
          <ResumeSection />
        </div>

        <div id="projects">
          <ProjectSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </Layout>

      {/* ⭐ GLOBAL FOOTER HERE */}
      <Footer />
    </>
  );
}
