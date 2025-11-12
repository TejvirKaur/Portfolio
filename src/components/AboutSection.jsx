import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Code, Psychology, EmojiPeople } from "@mui/icons-material";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 1,
          backgroundColor: "#fffaf5"

        }}
      >
        {/* TITLE */}
        <Typography
          variant="h4"
          gutterBottom
        sx={{
            fontWeight: 600,
            color: "#4b2e2b",
            letterSpacing: "0.5px",
          }}
        >
          About Me
        </Typography>

    {/* DESCRIPTION */}
    <Typography
      variant="body1"
      sx={{
        color: "text.primary",
        lineHeight: 1.8,
        mb: 3,
      }}
    >
      Hi, I’m <b>Tejvir Kaur</b>, a <b>detail-oriented Full-Stack Developer</b> with
      hands-on experience in both frontend and backend development, passionate
      about building responsive, user-focused web and mobile applications that
      combine clean design with strong functionality. I deliver <b>efficient</b>,{" "}
      <b>scalable</b>, and <b>creative digital solutions</b> that enhance user
      experiences and drive lasting impact.
      <br />
      My approach to development is guided by three core principles:
    </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          {[
            {
              icon: <Code sx={{ fontSize: 40, color: "#a37f74" }} />,
              title: "Clean Code",
              desc: "I write readable, maintainable, and scalable code for long-term reliability.",
            },
            {
              icon: <Psychology sx={{ fontSize: 40, color: "#a37f74" }} />,
              title: "Problem Solver",
              desc: "I enjoy turning complex challenges into efficient, creative solutions.",
            },
            {
              icon: <EmojiPeople sx={{ fontSize: 40, color: "#a37f74" }} />,
              title: "User-Centered Thinker",
              desc: "I design and build with empathy, focusing on meaningful user experiences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  width: 220,
                }}
              >
                {item.icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mt: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
}
