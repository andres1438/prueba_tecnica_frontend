import * as React from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TimeInputForm from './TimeInputForm';
import AllFibonacci from './AllFibonacci';

const pages = ['Todos', 'Crear'];


function ResponsiveAppBar({ value, onUpdateValue }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [page, setPage] = React.useState("Crear");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleChange = (page) => {
    onUpdateValue(page);
  };

  const handleCloseNavMenu = (page= null) => {
    setAnchorElNav(null);
    if(page){
      setPage(page);
      console.log(page);
    }
 
  };

  const handleSelectOption = (page)=>{
    console.log(page);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
          <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    { page !='' && page == 'Crear' && <TimeInputForm />}
    { page !='' && page == 'Todos' && <AllFibonacci />}
    </div>
    
  );
}
export default ResponsiveAppBar;