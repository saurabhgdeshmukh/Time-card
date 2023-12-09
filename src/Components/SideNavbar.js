import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import '../App.css'
import { Style } from '@mui/icons-material';
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
              <h3>Home</h3>
            <ListItemText primary=""/>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <h3>Category</h3>
            <ListItemText  />
          </ListItem>
          
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <h3>Message</h3>
            <ListItemText />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <h3>Settings</h3>
            <ListItemText  />
          </ListItem>
        </List>
      </Drawer>
    </Box>
 );
};

export default SideNavbar;