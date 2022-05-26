import React from "react"
import SearchIcon from '@mui/icons-material/Search'
import { useDataLayerValue } from '../DataLayer'

const Header = () => {
  const [{ user }] = useDataLayerValue();

    return(
      <div className='header'>
        <div className='header_left'>
            <SearchIcon />
            <input 
              placeholder='Search for songs, artists, etc.'
              type = 'text' />
        </div>
        
        <div className='header_right'>
            <h4> {user?.display_name}</h4> 
        </div>
      </div>
  )
}

export default Header