import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CardHeader from './CryptoHeader';
import CryptoCard from './CryptoCard';
import { config } from '../../Constants';
import './CryptoTable.css'

function CryptoTable (props) {
    const url = config.url.API_URL;
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        axios.get(`${url}/api/cryptocurrencies/${props.subreddit}`).then((response) => {
            setCryptoData(response.data.data);
        });
    }, [url, props.subreddit]);

    return (
        <Table responsive className="crypto-table container bg-white" >
            <thead>
                <CardHeader />
            </thead>
            <tbody>
                {console.log(props.bookmarks)}
                {cryptoData && cryptoData.map((data, id) => {
                    return <CryptoCard 
                        key={id}
                        rank={data.rank} 
                        name={data.name} 
                        symbol={data.ticker.slice(0,-2)}
                        mentions={data.mentions} 
                        upvotes={data.upvotes}
                        bookmarked={props.bookmarks.includes(data.ticker.slice(0,-2))}
                    />
                })}
            </tbody>
        </Table>
    );
}

export default CryptoTable;