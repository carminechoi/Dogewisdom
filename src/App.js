import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { config } from './Constants'

import logo from './logo.svg';
import './App.css';

function App() {
    const url = config.url.API_URL;
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.api);
        });
      }, []);

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{!data ? "Loading..." : data}</p>
        </header>
        </div>
    );
}

export default App;
