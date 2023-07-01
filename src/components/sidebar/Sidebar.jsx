import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className='sidebarIcon'></RssFeedIcon>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className='sidebarIcon'></ChatIcon>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <VideoChatIcon className='sidebarIcon'></VideoChatIcon>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupsIcon className='sidebarIcon'></GroupsIcon>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className='sidebarIcon'></BookmarkIcon>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <QuestionMarkIcon className='sidebarIcon'></QuestionMarkIcon>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon className='sidebarIcon'></WorkIcon>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className='sidebarIcon'></EventIcon>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className='sidebarIcon'></SchoolIcon>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarLine'></hr>
            <ul className="sidebarFriendList">
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
                <li className="sidebarFreind">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFreindImg" />
                    <span className="sidebarFreindName">Jane Doe</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
