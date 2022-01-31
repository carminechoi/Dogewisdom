import React, { useState } from 'react'
import NavigationBar from '../components/Navbar/Navbar.js'
import SubredditBar from '../components/SubredditBar/SubredditBar.js';
import CryptoTable from '../components/Cards/CryptoTable';

function Home() {
    const [subreddit, setSubreddit] = useState('All')

    return (
        <div className="homepage">
            <NavigationBar />
            <SubredditBar subreddit={subreddit} setSubreddit={setSubreddit} />
            <div className="mx-5">
                <CryptoTable subreddit={subreddit} />
            </div>
        </div>
    )
}

export default Home;