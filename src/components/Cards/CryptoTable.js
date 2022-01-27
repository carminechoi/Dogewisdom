import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CardHeader from './CryptoHeader';
import CryptoCard from './CryptoCard';
import './CryptoTable.css'

function CryptoTable () {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/cryptocurrencies/').then((response) => {
            setCryptoData(response.data.data);
        });
    }, []);

    return (
        <Table className="crypto-table container bg-white" >
            <thead>
                <CardHeader />
            </thead>
            <tbody>
                {cryptoData && cryptoData.map((data, id) => {
                    return <CryptoCard 
                        key={id}
                        rank={data.rank} 
                        name={data.name} 
                        symbol={data.ticker.slice(0,-2)}
                        mentions={data.mentions} 
                        upvotes={data.upvotes}
                    />
                })}
            </tbody>
        </Table>
    );
}

export default CryptoTable;