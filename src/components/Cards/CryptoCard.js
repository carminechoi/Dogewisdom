import React from 'react';

function CryptoCard(props) {
    let imageURL = `https://cryptocurrencyliveprices.com/img/${props.symbol.toLowerCase()}-${props.name.toLowerCase().replace(/\s/g , "-")}.png`;
    
    function hideImage(img) {
        img.style.display = "none";
    }
    return (
        <tr className="bg-white align-middle">
            <td className="text-center">a</td>
            <td className="text-center">{props.rank}</td>
            <td className="d-flex align-items-center align-text-center ms-2">
                <img  className="" src={imageURL} alt="" width="20" height="20" 
                    onError={"this.style.display='none'"}/>
                <div className="ms-2">{props.name}</div>
            </td>
            <td className="text-center">{props.symbol}</td>
            <td className="text-center">{props.mentions}</td>
            <td className="text-center">{props.upvotes}</td>
        </tr>
    );
}

export default CryptoCard;