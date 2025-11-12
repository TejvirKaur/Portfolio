import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import ProfilePic from "../assets/p2.png";

export default function ProfileSidebar() {
  return (
    <Box
      sx={{
        textAlign: "center",
        px: 1, 
        py: 1, 
      }}
    >
      <Avatar
        src={ProfilePic}
        alt="Tejvir Kaur"
        sx={{
          width: 180,
          height: 285,
          borderRadius: "16px",
          mx: "auto",
          mb: 2,
          boxShadow: "0 8px 10px rgba(0,0,0,0.15)",
        }}
      />

      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Tejvir Kaur
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Full-Stack Developer
      </Typography>

      {/* Tagline */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#6d4c41",
          fontStyle: "italic",
          mb: 2,
        }}
      >
        “Developing experiences that connect people and technology.”
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={1} mb={3}>
        <Button
          href="https://github.com/TejvirKaur"
          target="_blank"
          startIcon={<GitHub />}
          size="big"
          sx={{ textTransform: "none" }}
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/tejvir-kaur/"
          target="_blank"
          startIcon={<LinkedIn />}
          size="big"
          sx={{ textTransform: "none" }}
        >
          LinkedIn
        </Button>
      </Stack>

      <Button
        variant="contained"
        startIcon={<Mail />}
        href="mailto:tejvirkaur01@gmail.com"
        sx={{
          borderRadius: 1.5,
          textTransform: "none",
          px: 3,
          fontWeight: "bold",
          backgroundColor: "#a37f74",
          "&:hover": { backgroundColor: "#8d6e63" },
        }}
      >
        Contact
      </Button>
    </Box>
  );
}
