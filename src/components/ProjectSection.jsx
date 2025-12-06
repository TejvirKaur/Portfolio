import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import pawllImage from '../assets/ProjectCover/Splash.jpeg';
import padelpatchImage from '../assets/ProjectCover/padelpatch.jpeg';
import streetsightImage from '../assets/ProjectCover/streetsight.jpeg';
import zyraImage from '../assets/ProjectCover/zyraImage.jpeg';
import sudikshaImage from '../assets/ProjectCover/SudikshaImage.jpeg';
import { Link } from "react-router-dom";


const projects = [
  {
    title: "PAWLL – Pet Care Companion App",
    image: pawllImage,
    desc: "A UI/UX research project focused on simplifying pet care through thoughtful design.",
    link: "https://www.figma.com/proto/E6z56qGl2nR5PJ6r8k76Hr/Group-5--PAWLL---Prototype?node-id=451-1647&starting-point-node-id=451%3A1637",
  },
  {
    title: "StreetSight – Campaign Management App",
    image: streetsightImage,
    desc: "A full-stack website with a dashboard to create and manage ad campaigns.",
    link: "https://streetsight.wmdd.ca/",
  },
  {
    title: "Zyra – Habit building Mobile App for Kids",
    image: zyraImage,
    desc: "Zyra is an AR-powered habit-building app that turns kids’ daily routines into fun adventures with interactive 3D companions and playful learning.",
    link: "https://zyra.wmddprogram.com/",
  },
    {
    title: "PEDAL PATCH – Cycling Community Website",
    image: padelpatchImage,
    desc: "A website that connects cyclists to bike service providers through real-time location tracking and booking.",
    link: "#",
  },
  {
    title: "Sudiksha Kumar - Portfolio",
    image: sudikshaImage,
    desc: "A personal portfolio website showcasing projects and skills.",
    link: "https://github.com/TejvirKaur/sudiksha_kumar_portfolio",
  },
 
];

export default function ProjectsSection({ showAll = false }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%" }}
    >
    {!showAll && (
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#4b2e2b",
          letterSpacing: "0.5px",
          mb: 3,
          marginLeft: 4,
          textAlign: "left",
        }}
      >
        Projects
      </Typography>
    )}


      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "center",
        }}
      >
        {(showAll ? projects : projects.slice(0, 3)).map((p, i) => (
          <Grid
            item
            xs={12}   
            sm={6}    
            md={4}   
            key={i}
            display="flex"
            justifyContent="center"
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                textAlign: "center",
                height: "100%",
                width: "100%",
                maxWidth: 390,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={p.image}
                alt={p.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#4b2e2b", mb: 1 }}
                >
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {p.desc}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    color: "#4b2e2b",
                    borderColor: "#4b2e2b",
                    "&:hover": { backgroundColor: "#4b2e2b", color: "#fff" },
                  }}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      {!showAll && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            component={Link}
            to="/projects"
           sx={{
                background: "linear-gradient(90deg, #a37f74, #b48b80)",
                borderRadius: 1.5,
                px: 4,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(90deg, #8d6e63, #9c746a)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 10px rgba(163,127,116,0.3)",
                },
                transition: "all 0.3s ease",
              }}
          >
            View All Projects
          </Button>
        </div>
      )}

      </div>

      </Grid>
    </motion.div>
  );
}

