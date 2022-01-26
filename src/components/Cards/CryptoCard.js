import React from 'react';

function CryptoCard(props) {
    return (
        <tr className="bg-white">
            <td className="text-center">a</td>
            <td className="text-center">{props.rank}</td>
            <td className="">{props.name}</td>
            <td className="text-center">{props.symbol}</td>
            <td className="text-center">{props.mentions}</td>
            <td className="text-center">{props.upvotes}</td>
        </tr>
    );
}

export default CryptoCard;