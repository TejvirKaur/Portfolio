import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion"; 
import ProfileSidebar from "./components/ProfileSidebar";

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "#f9fafb", 
      }}
    >

      <Box
        sx={{
          width: isMobile ? "100%" : "28%",
          minWidth: isMobile ? "100%" : 320,
          position: isMobile ? "relative" : "sticky",
          top: 0,
          height: isMobile ? "auto" : "100vh",
          display: "flex",
          justifyContent: "center",
          overflow: "visible",
          alignItems: "center",
          backgroundColor: isMobile ? "transparent" : "#f9fafb", 
          p: isMobile ? 2 : 4,
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          style={{
            width: "100%",
            maxWidth: 360,
            borderRadius: "16px",
            backgroundColor: "#fdf8f5",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            padding: "1.5rem 1.5rem",
            textAlign: "center",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          <ProfileSidebar />
        </motion.div>
      </Box>

       <Box
        sx={{
          flexGrow: 1,
          height: "auto",
          overflow: "visible", 
          display: "flex",
          flexDirection: "column",
          gap: 5,
          p: { xs: 2, md: 5 },
          scrollBehavior: "smooth",
        }}
      >
        {children || (
          <Box sx={{ color: "#555", fontSize: "1.2rem", textAlign: "center", mt: 5 }}>
            Add your portfolio sections here →
          </Box>
        )}
      </Box>
    </Box>
  );
}
