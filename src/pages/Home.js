import React from 'react'
import Header from '../components/Navbar'
import SubredditBar from '../components/SubredditBar';
import CardHeader from '../components/CardHeader';

function Home() {
    return (
        <div className="homepage">
            <Header />
            <SubredditBar />
            <div className="">
                <CardHeader />
            </div>
        </div>
    )
}

export default Home;