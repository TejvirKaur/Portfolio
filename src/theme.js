import { createTheme } from '@mui/material/styles'

const theme = createTheme({
palette: {
background: {
default: '#f5ede4', 
paper: '#fffaf5',
},
primary: {
main: '#c49a77', 
contrastText: '#ffffff'
},
secondary: {
main: '#d7bfae',
},
text: {
primary: '#2b2b2b',
secondary: '#6e6e6e'
}
},
typography: {
fontFamily: ['Poppins', 'Inter', 'sans-serif'].join(','),
h2: { fontWeight: 600 },
h3: { fontWeight: 500 }
},
shape: { borderRadius: 16 }
})


export default theme