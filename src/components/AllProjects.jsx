import React from "react";
import ProjectsSection from "./ProjectSection";
import Footer from "./FooterSection";

export default function AllProjects() {
  return (
    <>
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#4b2e2b",
            textAlign: "center",
          }}
        >
          All Projects
        </h1>

        {/* REMOVE extra wrapper */}
        <ProjectsSection showAll />
      </div>

      {/* Footer should now appear correctly */}
      <Footer />
    </>
  );
}
