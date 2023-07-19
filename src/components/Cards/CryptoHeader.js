import React from 'react';

function CryptoHeader () {
    return (
        <tr className="bg-white">
            <th className="text-center d-none d-sm-table-cell"></th>
            <th className="text-center d-none d-sm-table-cell">Rank</th>
            <th className="ps-5">Name</th>
            <th className="text-center">Symbol</th>
            <th className="text-center">Mentions</th>
            <th className="text-center">Upvotes</th>
        </tr>
    );
}

export default CryptoHeader;