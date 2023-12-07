import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'
const SideNavbar = () => {
 const [drawerOpen, setDrawerOpen] = useState(false);

 const toggleDrawer = () => {
   setDrawerOpen(!drawerOpen);
 };

 return (
    <Box >
      <IconButton className="menu-icon" edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer  anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List className="sidebar-drawer-list">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
 );
};

export default SideNavbar;