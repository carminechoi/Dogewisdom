import React from 'react';
import cmcData from '../../assets/cmc-data.json'

function CryptoCard(props) {
    
    function getImageURL() {
        let crypto, imageURL;
        
        crypto = cmcData.filter(function(cmcData) {
            return cmcData.symbol === props.symbol;
        })[0];

        if (crypto) {
            imageURL = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
        } else {
            imageURL = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`
        }
        return imageURL;
    }

    return (
        <tr className="bg-white align-middle">
            <td className="text-center">a</td>
            <td className="text-center">{props.rank}</td>
            <td className="d-flex align-items-center align-text-center ps-4">
                <img  className="" src={getImageURL()} alt="" width="20" height="20" />
                <div className="ms-2">{props.name}</div>
            </td>
            <td className="text-center">{props.symbol}</td>
            <td className="text-center">{props.mentions}</td>
            <td className="text-center">{props.upvotes}</td>
        </tr>
    );
}

export default CryptoCard;