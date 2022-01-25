import React from 'react';

function CryptoCard(props) {
    return (
        <tr className="bg-white">
            <td width={'10%'} className="text-center">a</td>
            <td width={'10%'} className="text-center">{props.rank}</td>
            <td width={'50%'}>{props.name}</td>
            <td width={'10%'} className="text-center">{props.symbol}</td>
            <td width={'10%'} className="text-center">{props.mentions}</td>
            <td width={'10%'} className="text-center">{props.upvotes}</td>
        </tr>
    );
}

export default CryptoCard;