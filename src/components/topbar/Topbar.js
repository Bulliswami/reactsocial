import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">
                Swami
            </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
             <SearchIcon className='searchIcon'></SearchIcon>   <input placeholder='Search for freind,post or video' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">
                    Homepage
                </span>
                <span className="topbarLink">
                    Timeline
                </span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon></PersonIcon>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon></ChatIcon>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon></NotificationsIcon>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
