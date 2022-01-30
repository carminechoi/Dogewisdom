import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SubredditBar.css';


function SubredditBar (props) {

    const handleButton = (newSubreddit) => {
        props.setSubreddit(newSubreddit)        
        console.log(`in subredditBar.js: ${props.subreddit}`)
    }

    return (
        <div className='d-flex flex-row flex-wrap container' id='subreddit-nav'>
            <Button
                onClick={(e) => handleButton('r/All')}
                className={props.subreddit === 'r/All' ? "subreddit-button active" : "subreddit-button"}
                variant={props.subreddit === 'r/All' ? "outline-primary" : "outline-secondary"}
                size="md">
                All
            </Button>

            <Button
                onClick={(e) => handleButton('r/CryptoCurrency')}
                className={props.subreddit === 'r/CryptoCurrency' ? "subreddit-button active" : "subreddit-button"}
                variant={props.subreddit === 'r/CryptoCurrency' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/CryptoCurrency
            </Button>

            <Button
                onClick={(e) => handleButton('r/Cryptocurrencies')}
                className={props.subreddit === 'r/CryptoCurrencies' ? "subreddit-button active" : "subreddit-button"}
                variant={props.subreddit === 'r/CryptoCurrencies' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/CryptoCurrencies
            </Button>

            {/* <Button
                onClick={(e) => this.handleButton(e)}
                className={this.state.subreddit === 'r/Bitcoin' ? "subreddit-button active" : "subreddit-button"}
                variant={this.state.subreddit === 'r/Bitcoin' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/Bitcoin
            </Button>

            <Button
                onClick={(e) => this.handleButton(e)}
                className={this.state.subreddit === 'r/SatoshiStreetBets' ? "subreddit-button active" : "subreddit-button"}
                variant={this.state.subreddit === 'r/SatoshiStreetBets' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/SatoshiStreetBets
            </Button>

            <Button
                onClick={(e) => this.handleButton(e)}
                className={this.state.subreddit === 'r/CryptoMoonShots' ? "subreddit-button active" : "subreddit-button"}
                variant={this.state.subreddit === 'r/CryptoMoonShots' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/CryptoMoonShots
            </Button>

            <Button
                onClick={(e) => this.handleButton(e)}
                className={this.state.subreddit === 'r/EthTrader' ? "subreddit-button active" : "subreddit-button"}
                variant={this.state.subreddit === 'r/EthTrader' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/EthTrader
            </Button>

            <Button
                onClick={(e) => this.handleButton(e)}
                className={this.state.subreddit === 'r/Ethereum' ? "subreddit-button active" : "subreddit-button"}
                variant={this.state.subreddit === 'r/Ethereum' ? "outline-primary" : "outline-secondary"}
                size="md">
                r/Ethereum
            </Button> */}
        </div>
    );
}


export default SubredditBar;