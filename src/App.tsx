import React, { useState, useEffect } from 'react';
import { YT_API_KEY } from './.env.js';
import './App.css';

const App: React.FC = () => {
  const [ apiConnected, setApiConnected ] = useState<boolean>(false);

  const loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(YT_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          setApiConnected(true);
        })
      })
    }
  }

  useEffect(() => {
    loadYoutubeApi();
  },[])


  return (
    <div className="App">

    </div>
  );
}

export default App;
