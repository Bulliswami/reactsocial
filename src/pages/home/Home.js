import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"
export default function Home() {
  return (
   <>
   <Topbar></Topbar>
   <div className="homeContainer">
   <Sidebar></Sidebar>
   <Feed></Feed>
   <Rightbar></Rightbar> 
   </div>
   
   </>
  )
}
