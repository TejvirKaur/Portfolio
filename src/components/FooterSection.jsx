import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        textAlign: 'center', 
        pt: 2,          
        pb: 4          
      }}
    >
      <Box 
        sx={{ 
          borderTop: '1px solid #e0e0e0', 
          mb: 1,     
          marginLeft: 2, 
          marginRight: 2
        }} 
      />
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} Designed and Developed by Tejvir Kaur
      </Typography>
    </Box>
  )
}
