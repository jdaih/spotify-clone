import React from "react"
import SidebarOption from './SidebarOption'

const Sidebar = () => {
    return(
        <div className='sidebar'>
         <div className="sidebar_logo">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
            </div>
          <SidebarOption title='Home' />
          <SidebarOption title='Search' />
          <SidebarOption title='Your Library' />

        <br/>
        <h4> Playlists</h4>
        <hr/>

          <SidebarOption title='Playlist Example'/>

        </div>
    );
  }

export default Sidebar