import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Medicine from './Medicine.png';
import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const pages = ['Home', 'Contact Us', 'Doctors'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="Appbar">
      <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={Medicine} alt="pharmacy" style={{ height: '2%', width: '4%' }}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#000080',
                textDecoration: 'none',
              }}
            >
              Pharmacy
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => {
                let path;
                switch (page) {
                  case 'Home':
                    path = "/";
                    break;
                  case 'Contact Us':
                    path = "/contactus";
                    break;
                  case 'Doctors':
                    path = "/doctors";
                    break;
                  default:
                    path = "/";
                }
                return (
                  <Link key={page} to={path}>
                    <Button sx={{ my: 2, color: '#191970', display: 'block' }}>
                      {page}
                    </Button>
                  </Link>
                );
              })}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack spacing={2} direction="row">
                <Link to="/signup">
                  <Button variant="contained" sx={{ backgroundColor: '#000080' }}>
                    Sign Up
                  </Button>
                </Link>

                <Link to="/login">
                  <Button variant="outlined">
                    Login
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Appbar;
