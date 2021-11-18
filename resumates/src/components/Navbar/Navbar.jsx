import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AppBar, Toolbar, IconButton, Menu, MenuItem  } from "@material-ui/core"; 
import MenuIcon from "@material-ui/icons/Menu";

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
    <div>
    <AppBar id="AppBar">
        <Toolbar>
         <nav>
            <IconButton
            size="large"
            edge="start"
            color="#fffeeb"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
               <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to='/Profile'>My Resumes</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/LandingPage'>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/Upload'>Upload</Link></MenuItem>
                <MenuItem onClick={() => props.handleLogout()}><Link to='/LandingPage'>Logout</Link></MenuItem>
              </Menu>
                <Link id='logo' className='link' to='/index'>Resumates</Link>
          </nav>
        </Toolbar>
    </AppBar>
    </div>
    )
}

export default Navbar  
         
