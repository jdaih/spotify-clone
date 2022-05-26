import React from "react"
import Header from './Header'

const Body = ({ spotify }) => {
    return(
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body_content'>
                <img src='https://i.scdn.co/image/ab67616d00001e02fb0e1e3dd98e337feeaaefe0' alt='Album Cover'/>
            </div>

            <div className='body_text'>
                <strong>ALBUM</strong>
                <h2> Start Singing with Barney </h2>
            </div>
        </div>
    )
}

export default Body