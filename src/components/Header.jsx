import React from "react"
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
    return(
      <div className='header'>
        <div className='header_left'>
            <SearchIcon />
            <input 
              placeholder='Search for songs, artists, etc.'
              type = 'text' />
        </div>
        <div className='header_right'>
            <h4>User Name</h4> 
        </div>
      </div>
  )
}

export default Header