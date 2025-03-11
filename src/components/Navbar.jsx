import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
 
const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#030307" }}>
      <Toolbar>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
  >
    <MenuIcon />
  </IconButton>

  
  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
   MOVIE-BLAST
  </Typography>

  <Button><Link to="/" style={{ color: 'whitesmoke' }}>Home</Link></Button>
  <Button><Link to="/k" style={{ color: 'whitesmoke' }}>Signup</Link></Button>
  <Button><Link to="/l" style={{ color: 'whitesmoke' }}>Login</Link></Button>
  <Button><Link to="/a" style={{ color: 'whitesmoke' }}>Add-movies</Link></Button>
  <Button><Link to="/m" style={{ color: 'whitesmoke' }}>Movis-List</Link></Button>

</Toolbar>

      </AppBar>
    </Box>
     
    </div>
  )
}
 
export default Navbar