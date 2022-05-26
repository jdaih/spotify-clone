import React from "react"
import Header from './Header'
import SongRow from "./SongRow"
import { useDataLayerValue } from '../DataLayer'


const Body = ({ spotify }) => {
    const [{ discover_weekly }] = useDataLayerValue();
    return(
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body_content'>
                <img src={discover_weekly?.images[0].url} alt='Album Cover'/>
            <div className='body_text'>
                <strong>ALBUM</strong>
                <h2> Start Singing with Barney </h2>
                <p> Barney * 2003 * 23 songs, 35 min 30 sec </p>
            </div>
        </div>

        <div className='body_songs'>
            {discover_weekly?.tracks.items.map(item =>
            <SongRow track={item.track} /> )}
        </div>
    </div>
    )
}

export default Body