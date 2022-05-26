import React, { useEffect } from 'react'
import './App.css'
import Login from './login/Login.js'
import { getTokenFromUrl } from './login/loginAuthorization'
import SpotifyWebApi from 'spotify-web-api-js'
import Dashboard from './components/Dashboard'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcDKyGBPaQkJi').then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      )
    }
  }, );

  // console.log(token)

  return (
    <div className='app'>
      {token ? <Dashboard spotify={spotify} /> : (<Login />)}
    </div>
  );
}

export default App;
