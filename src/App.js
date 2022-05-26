import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './login/Login.js'
import { getTokenFromUrl } from './login/loginAuthorization'
import SpotifyWebApi from 'spotify-web-api-js'
import Dashboard from './components/Dashboard'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

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
    }
  }, []);

  // console.log(token)

  return (
    <div className="App">
      {token ? <Dashboard spotify={spotify} /> : (<Login />)}
    </div>
  );
}

export default App;
