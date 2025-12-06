import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import resumePDF from '../assets/Tejvir-Kaur.pdf';


export default function ResumeSection() {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Freelance / Personal and Team Projects',
      date: '2024 - Present',
      desc: 'Designing and developing responsive web applications using React.js, Express.js, and MongoDB. Focused on crafting engaging user experiences and writing clean, maintainable code.',
    },
    {
      role: 'Social Media Manager',
      company: 'Dhiman Academy, Jalandhar, Punjab',
      date: '2023 - 2024',
      desc: 'Managed social media strategies, created content, and improved online engagement through creative campaigns and analytics-driven insights.',
    },
  ]

  const education = [
    {
      degree: 'Post Graduate Diploma in Web and Mobile App Development and Design',
      school: 'Langara College, Vancouver, Canada',
      date: '2024 - 2025',
    },
    {
      degree: 'Master’s in Computer Science',
      school: 'Guru Nanak Khalsa Girls College, Baba Sang Dhesian, Jalandhar, Punjab',
      date: '2021 - 2023',
    },
    {
      degree: 'Bachelor’s in Computer Science',
      school: 'Guru Nanak Khalsa Girls College, Baba Sang Dhesian, Jalandhar, Punjab',
      date: '2018 - 2021',
    },
  ]

  const Timeline = ({ items, isEducation }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        left: '8px',
        top: 0,
        bottom: 0,
        width: '2px',
        backgroundColor: '#d3b8ae',
        borderRadius: '1px',
      }}
    />
    {items.map((item, i) => (
      <div
        key={i}
        style={{
          position: 'relative',
          marginBottom: '30px',
        }}
      >
        {/* Dot */}
        <div
          style={{
            position: 'absolute',
            left: '3px',
            top: '6px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#a37f74',
            border: '2px solid #f9f4ef',
          }}
        />

        {/* Text */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            pl: { xs: 5, sm: 6 } 
          }}
        >
          {isEducation ? item.degree : `${item.role} — ${item.company}`}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            pl: { xs: 5, sm: 6 } 
          }}
        >
          {isEducation ? item.school : item.date}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            pl: { xs: 5, sm: 6 }
          }}
        >
          {isEducation ? item.date : item.desc}
        </Typography>
      </div>
    ))}
  </div>
)


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Paper elevation={2} sx={{ p: 4, borderRadius: 1}}>
        <Typography variant="h4" gutterBottom    
        sx={{
            fontWeight: 600,
            color: "#4b2e2b",
            letterSpacing: "0.5px",
          }}>
          Resume
        </Typography>

        {/* EXPERIENCE */}
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Experience
        </Typography>
        <Timeline items={experiences} />

        {/* EDUCATION */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Education
        </Typography>
        <Timeline items={education} isEducation />

        {/* DOWNLOAD BUTTON */}
        <Button
            component="a"
            href={resumePDF}
            download="Tejvir-Kaur.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            Download Resume (PDF)
            </Button>

      </Paper>
    </motion.div>
  )
}
