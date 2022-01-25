import React from 'react';

function CryptoHeader () {
    return (
        <div className="row bg-white">
            <div className="col text-center"></div>
            <div className="col text-center">Rank</div>
            <div className="col">Name</div>
            <div className="col text-center">Symbol</div>
            <div className="col text-center">Mentions</div>
            <div className="col text-center">Upvotes</div>
        </div>
    );
}

export default CryptoHeader;