import React from 'react'
import Header from '../components/Navbar'
import SubredditBar from '../components/SubredditBar';

function Home() {
    return (
        <div className="homepage">
            <Header />
            <SubredditBar />
        </div>
    )
}

export default Home;