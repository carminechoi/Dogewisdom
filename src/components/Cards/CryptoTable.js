import React from 'react';
import Table from 'react-bootstrap/Table';
import CardHeader from './CryptoHeader';
import CryptoCard from './CryptoCard';
import './CryptoTable.css'

function CryptoTable () {
    return (
        <Table className="crypto-table container table-borderless" >
            <thead>
                <CardHeader />
            </thead>
            <tbody>
                <CryptoCard rank="1" name="Bitcoin" symbol="BTC" mentions="1234" upvotes="1234567" />
                <CryptoCard rank="2" name="Cardano" symbol="ADA" mentions="1234" upvotes="1234567" />
            </tbody>
        </Table>
    );
}

export default CryptoTable;