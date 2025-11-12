import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function Footer() {
return (
<Box component="footer" sx={{ py: 4, textAlign: 'center' }}>
<Typography variant="body2" sx={{ color: 'text.secondary' }}>© {new Date().getFullYear()} Designed and Developed by Tejvir Kaur</Typography>
</Box>
)
}