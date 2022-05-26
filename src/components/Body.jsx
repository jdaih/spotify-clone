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
                <strong>PLAYLIST</strong>
                <h2> Discover Weekly </h2>
                <p> Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday. </p>
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