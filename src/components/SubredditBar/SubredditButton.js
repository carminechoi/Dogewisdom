import React from "react";
import Button from 'react-bootstrap/Button';
import './SubredditButton.css';

function SubredditButton (props) {
    return (
        <Button
            onClick={() => props.handleButton(props.subreddit)}
            className={props.currentSubreddit === `${props.subreddit}` ? "subreddit-button active" : "subreddit-button"}
            variant={props.currentSubreddit ===  `${props.subreddit}` ? "outline-primary" : "outline-secondary"}
            size="md">
            {props.subreddit}
        </Button>
    );
}

export default SubredditButton;