import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { config } from './Constants'

import logo from './logo.svg';
import './App.css';

function App() {
    const url = config.url.API_URL;
    const [data, setData] = useState(null);
    const [dbData, setdbData] = useState(null);

    useEffect(() => {
        axios.get(url + "/api").then((response) => {
            setData(response.data.message);
        });
        axios.get(url + "/").then((response) => {
            setdbData(response.data.message);
        });
      }, [url]);

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{!data ? "Loading..." : data}</p>
            <p>{!dbData ? "Empty" : dbData}</p>
        </header>
        </div>
    );
}

export default App;
