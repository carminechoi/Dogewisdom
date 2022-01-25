import React from 'react'
import NavigationBar from '../components/Navbar/Navbar.js'
import SubredditBar from '../components/SubredditBar/SubredditBar.js';
import CryptoTable from '../components/Cards/CryptoTable';

function Home() {
    return (
        <div className="homepage">
            <NavigationBar />
            <SubredditBar />
            <div className="mx-5">
                <CryptoTable />
            </div>
        </div>
    )
}

export default Home;