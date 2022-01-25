import React from 'react';

function CryptoHeader () {
    return (
        <thead className="bg-white">
            <tr>
                <th width={'10%'} className="text-center"></th>
                <th width={'10%'} className="text-center">Rank</th>
                <th width={'50%'}>Name</th>
                <th width={'10%'} className="text-center">Symbol</th>
                <th width={'10%'} className="text-center">Mentions</th>
                <th width={'10%'} className="text-center">Upvotes</th>
            </tr>
        </thead>
    );
}

export default CryptoHeader;