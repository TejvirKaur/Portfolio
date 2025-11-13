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

const projects = [
  {
    title: "PAWLL – Pet Care Companion App",
    image: pawllImage,
    desc: "A UI/UX research project focused on simplifying pet care through thoughtful design.",
    link: "https://www.figma.com/proto/E6z56qGl2nR5PJ6r8k76Hr/Group-5--PAWLL---Prototype?node-id=451-1647&starting-point-node-id=451%3A1637",
  },
  {
    title: "PEDAL PATCH – Cycling Community Website",
    image: padelpatchImage,
    desc: "A website that connects cyclists to bike service providers through real-time location tracking and booking.",
    link: "#",
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
    link: "https://zyraapp.wmdd.ca/",
  },
  {
    title: "Sudiksha Kumar - Portfolio",
    image: sudikshaImage,
    desc: "A personal portfolio website showcasing projects and skills.",
    link: "https://github.com/TejvirKaur/sudiksha_kumar_portfolio",
  },
 
];

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%" }}
    >
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

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "center",
        }}
      >
        {projects.map((p, i) => (
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
      </Grid>
    </motion.div>
  );
}
