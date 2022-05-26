import React from "react"
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../DataLayer'

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();
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
          {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name} />
          ))}

        </div>
    );
  }

export default Sidebar