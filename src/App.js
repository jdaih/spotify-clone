import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './login/Login.js'
import { getTokenFromUrl } from './login/loginAuthorization'
import SpotifyWebApi from 'spotify-web-api-js'
import Dashboard from './components/Dashboard'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        console.log(user)

        dispatch({
          type: 'Set_USER',
          user: user
        })
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Dashboard /> : (<Login />)}
    </div>
  );
}

export default App;
