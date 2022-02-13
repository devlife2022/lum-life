import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid';


const pages = ['FAQ', 'History'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

{/*
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
*/}

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

{/*
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
*/}

  return (
    <AppBar style={{background: "#f6a4af"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>


    {/* This section is for a md+ screen */}
    <Box sx={{display:{ xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '100%'} }>
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
        	<Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{ my: 2}}
          >
            Lum Life
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
        	<Link href="https://twitter.com/HoodlumsNFT" target="_blank">
            	<TwitterIcon  sx={{ my: 3, color: 'white', display: 'block'}} />   
            </Link>    
        </Grid>
        <Grid item xs={4} align="end">
        	<ButtonGroup variant="text">
	        {pages.map((page) => (
	          <Button
	            key={page}
	            onClick={handleCloseNavMenu}
	            sx={{ color: 'white', display: 'block', fontWeight:'bold' }}
	          >
	            {page}
	          </Button>
	        ))}
	        </ButtonGroup>
      	</Grid>
      </Grid>          
    </Box>


    {/* This section is for a less than md screen */}
    <Box sx={{display:{ xs: 'flex', md: 'none' }, justifyContent: 'space-between', width: '100%'} }>
    	 <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={4}>
          <Typography
            variant="h5"
            sx={{ my: 2}}
          >
            Lum Life
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
        	<Link href="https://twitter.com/HoodlumsNFT" target="_blank">
            	<TwitterIcon  sx={{ my: 3, color: 'white', display: 'block'}} />   
            </Link>    
        </Grid>
          <Grid item xs={4} align="end">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ my:2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
         </Grid>
    </Box>
          
{/*    Will come back to this.
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
        
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
  
          </Box>
*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;