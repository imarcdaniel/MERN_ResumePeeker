import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AppBar, Toolbar, IconButton } from "@material-ui/core"; 
// import { MenuIcon } from '@material-ui/icons';

function Navbar() {
    return (
    <div>
    <AppBar id="AppBar">
        <Toolbar>
         <nav>
            <Link to='/index'>Resumates</Link>
            <Link to='/LandingPage'>Home</Link>
            <Link to='/Upload'>Upload</Link>
            <Link to='/Profile'>My Resumes</Link>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          </nav>
        </Toolbar>
    </AppBar>
    </div>
    )
}

export default Navbar  
         
