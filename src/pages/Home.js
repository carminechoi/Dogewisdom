import React from 'react'
import NavigationBar from '../components/Navbar'
import SubredditBar from '../components/SubredditBar';
import CryptoTable from '../components/Cards/CryptoTable';

function Home() {
    return (
        <div className="homepage bg-light mb-5">
            <NavigationBar />
            <SubredditBar />
            <div className="mx-5">
                <CryptoTable />
            </div>
        </div>
    )
}

export default Home;