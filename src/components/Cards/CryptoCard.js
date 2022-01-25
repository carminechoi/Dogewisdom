import React from 'react';

function CryptoCard (props) {
    return (
        <div className="row box mt-1 py-2 bg-white">
            <div className="col text-center">a</div>
            <div className="col text-center">{props.rank}</div>
            <div className="col ">{props.name}</div>
            <div className="col text-center">{props.symbol}</div>
            <div className="col text-center">{props.mentions}</div>
            <div className="col text-center">{props.upvotes}</div>
        </div>
    );
}

export default CryptoCard;