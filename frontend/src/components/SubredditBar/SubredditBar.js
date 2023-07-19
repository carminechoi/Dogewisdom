import React from 'react';
// import { Link } from 'react-router-dom';
import SubredditButton from './SubredditButton';
import './SubredditBar.css';


function SubredditBar (props) {

    const handleButton = (newSubreddit) => {
        props.setSubreddit(newSubreddit)        
    }

    return (
        <div className='d-flex flex-row flex-wrap container' id='subreddit-nav'>
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'All'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/CryptoCurrency'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/Cryptocurrencies'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/Bitcoin'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/SatoshiStreetBets'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/CryptoMoonShots'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/EthTrader'} handleButton={handleButton} />
            <SubredditButton currentSubreddit={props.subreddit} subreddit={'r/Ethereum'} handleButton={handleButton} />
        </div>
    );
}


export default SubredditBar;