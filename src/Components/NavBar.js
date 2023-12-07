import { ClassNames } from '@emotion/react';
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function NavBar() {
  return (
  
      
    <div class="topnav">
  <a class="active" href="#home">Hello</a>
  <div className="hi-icon"><WavingHandIcon/></div>
  <a className='search-icon'>
    <SearchIcon></SearchIcon>
    </a>
    <a className='chatAlt-icon'>
    <MarkUnreadChatAltIcon></MarkUnreadChatAltIcon>
    </a>
    <a className='chat-icon'>
    <ChatIcon></ChatIcon>
    </a>
    <a className='notification-icon'>
    <NotificationsIcon></NotificationsIcon>
    </a>
    
    
</div>
     
   
  );
}

export default NavBar;