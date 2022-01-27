import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SubredditBar.css';
import { Component } from 'react';


class SubredditBar extends Component {
    constructor(props) {
        super(props);
        this.state = { subreddit: 'r/all' };
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton = (e) => {
        this.setState(prevState => ({
            subreddit: e.target.innerText
        }));
    }

    render() {
        return (
            <div className='d-flex flex-row flex-wrap container' id='subreddit-nav'>
                <Button
                    onClick={(e) => this.handleButton(e)}
                    className={this.state.subreddit === 'r/all' ? "subreddit-button active" : "subreddit-button"}
                    variant={this.state.subreddit === 'r/all' ? "outline-primary" : "outline-secondary"}
                    size="md">
                    All
                </Button>

                <Button
                    onClick={(e) => this.handleButton(e)}
                    className={this.state.subreddit === 'r/CryptoCurrency' ? "subreddit-button active" : "subreddit-button"}
                    variant={this.state.subreddit === 'r/CryptoCurrency' ? "outline-primary" : "outline-secondary"}
                    size="md">
                    r/CryptoCurrency
                </Button>

                <Button
                    onClick={(e) => this.handleButton(e)}
                    className={this.state.subreddit === 'r/CryptoCurrencies' ? "subreddit-button active" : "subreddit-button"}
                    variant={this.state.subreddit === 'r/CryptoCurrencies' ? "outline-primary" : "outline-secondary"}
                    size="md">
                    r/CryptoCurrencies
                </Button>

                <Button
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
                </Button>
            </div>
        );
    }
}

export default SubredditBar;