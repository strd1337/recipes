import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }

  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton onClick={handleHome}>
            <ListItemIcon>
              <HomeIcon />       
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"About"} disablePadding>
          <ListItemButton onClick={handleAbout}>
            <ListItemIcon>
              <InfoIcon />        
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Culinary Companion
          </Typography>
          <Button color="inherit" onClick={handleLogin}>
            {user ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  )
}

export default NavBar;