import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(form.message + "\n\nFrom: " + form.email);
    window.location.href = `mailto:tejvirkaur01@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper
        elevation={2} 
        sx={{
          position: "relative",
          zIndex: 1,
          p: 4, 
          borderRadius: "20px", 
          backdropFilter: "blur(10px)",
          backgroundColor: "#fffaf5",
          boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
          mx: "auto",
          width: { xs: "100%", sm: "100%", md: "1300px" }, 
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
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 3, color: "text.secondary" }}
        >
          Love to hear from you! Whether you have a question, or a project idea!
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "grid", gap: 2 }}
        >
          <TextField
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="message"
            label="Message"
            value={form.message}
            onChange={handleChange}
            required
            multiline
            minRows={4}
            fullWidth
          />

          <Box sx={{ display: "flex", gap: 2}}>
            <Button
              type="submit"
              variant="contained"
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
              Send Message
            </Button>
            <Button
              variant="outlined"
               sx={{
                borderRadius: 1.5,
                px: 4,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onClick={() => setForm({ name: "", email: "", message: "" })}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
}
