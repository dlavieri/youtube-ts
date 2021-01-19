import React, { useState } from 'react';
import './App.css';

const API_KEY = "";

const App: React.FC = () => {
  const [ apiConnected, setApiConnected ] = useState<boolean>(false);

  const loadYoutubeApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          setApiConnected(true);
        })
      })
    }
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
