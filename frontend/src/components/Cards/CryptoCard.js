import React, {useState} from 'react';
import cmcData from '../../assets/cmc-data.json';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as Starfill } from '../../assets/star-fill.svg';
import './CryptoCard.css';
import axios from 'axios';
import { config } from '../../Constants';
import AuthService from '../../services/AuthService';
import LoginForm from '../LoginForm/LoginForm';

const API_URL = config.url.API_URL;

function CryptoCard(props) {
    const [showLogin, setShowLogin] = useState(false);
    const [bookmark, setBookmark] = useState(props.bookmarked);
    const getImageURL = () => {
        let crypto, imageURL;
        
        // find matching id based on symbol
        crypto = cmcData.filter(function(cmcData) {
            return cmcData.symbol === props.symbol;
        })[0];

        // display empty image if cmc does not have
        if (crypto) {
            imageURL = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
        } else {
            imageURL = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`
        }
        return imageURL;
    }

    const handleBookmark = () => {
        if (props.isLoggedIn) {
            // Submit Bookmark updates
            setBookmark(!bookmark);
            axios.post(API_URL + "/api/user/bookmark", {
                token: AuthService.getUser(),
                isBookmark: !bookmark,
                symbol: props.symbol,
            });
        } else {
            // Open Login Modal
            setShowLogin(!showLogin);
        }
    }

    return (
        <tr className="bg-white align-middle">
            <td className="text-center d-none d-sm-table-cell noselect">
                {bookmark ? <Starfill fill="gold" onClick={handleBookmark} /> : <Star onClick={handleBookmark} />}
                <LoginForm onClose={setShowLogin} showLogin={showLogin}/>
            </td>
            <td className="text-center d-none d-sm-table-cell">{props.rank}</td>
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