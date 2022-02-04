import React from 'react';
import '../style/LeftSidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TagIcon from '@mui/icons-material/Tag';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button } from '@mui/material';
import SidebarL from './SidebarL';

function LeftSidebar() {
  return (
    <div className="sidebar">
      <div className="darkMode">
        <TwitterIcon className="twitterIcon" />
      </div>
      <SidebarL Icon={HomeIcon} text="home" />
      <SidebarL Icon={TagIcon} text="Explore" />
      <SidebarL Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarL Icon={MailOutlineIcon} text="Messages" />
      <SidebarL Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarL Icon={ListAltIcon} text="Lists" />
      <SidebarL Icon={PermIdentityIcon} text="Profile" />
      <SidebarL Icon={MoreHorizIcon} text="More" />
      <Button className="message" fullWidth>Tweet</Button>
    </div>
  );
}

export default LeftSidebar;
