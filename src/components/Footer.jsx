import React from "react"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer_left'>
                <p> Album / Song </p>
            </div>
            <div className='footer_center'>
               <PlayCircleIcon/>
            </div>
            <div className='footer_right'>
                 <p> Player controls </p>
            </div>
        </div>
    )
}

export default Footer