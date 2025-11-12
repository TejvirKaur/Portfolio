import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaTrello,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiJira,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { icon: <FaHtml5 color="#E44D26" size={35} />, name: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" size={35} />, name: "CSS" },
    { icon: <FaJs color="#F7DF1E" size={35} />, name: "JavaScript" },
    { icon: <FaReact color="#61DBFB" size={35} />, name: "React" },
    { icon: <FaNodeJs color="#68A063" size={35} />, name: "Node.js" },
    { icon: <SiExpress color="#555" size={35} />, name: "Express.js" },
    { icon: <SiMongodb color="#4DB33D" size={35} />, name: "MongoDB" },
    { icon: <SiDotnet color="#512BD4" size={35} />, name: "ASP.NET" },
    { icon: <SiC color="#A8B9CC" size={35} />, name: "C" },
    { icon: <SiCplusplus color="#00599C" size={35} />, name: "C++" },
    { icon: <FaFigma color="#F24E1E" size={35} />, name: "Figma" },
    { icon: <SiJira color="#2684FF" size={35} />, name: "Jira" },
    { icon: <FaTrello color="#0079BF" size={35} />, name: "Trello" },
    { icon: <FaGithub color="#181717" size={35} />, name: "GitHub" },
    { icon: <SiAdobephotoshop color="#31A8FF" size={35} />, name: "Photoshop" },
    { icon: <SiAdobeillustrator color="#FF9A00" size={35} />, name: "Illustrator" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: "20px",
          backgroundColor: "#fffaf5",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#4b2e2b",
            letterSpacing: "0.5px",
          }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(8, 1fr)",
            },
            gap: 3,
            justifyItems: "center",
            mt: 2,
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.15,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#f2ece7",
                  borderRadius: "15px",
                  p: 2,
                  width: 100,
                  height: 100,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease",
                }}
              >
                {skill.icon}
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
}

