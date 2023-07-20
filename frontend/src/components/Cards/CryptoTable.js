import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CardHeader from "./CryptoHeader";
import CryptoCard from "./CryptoCard";
import Spinner from "react-bootstrap/Spinner";
import { config } from "../../Constants";
import "./CryptoTable.css";

function CryptoTable(props) {
	const url = config.url.API_URL;
	const [cryptoData, setCryptoData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${url}/api/cryptocurrencies/${props.subreddit}`)
			.then((response) => {
				setCryptoData(response.data.data);
				setLoading(false);
			});
	}, [url, props.subreddit]);

	return (
		<div>
			{loading ? (
				<div className="loading text-center">
					<Spinner animation="border" variant="primary" role="status" />
				</div>
			) : (
				<Table responsive className="crypto-table container bg-white">
					<thead>
						<CardHeader />
					</thead>
					<tbody>
						{cryptoData &&
							cryptoData.map((data, id) => {
								return (
									<CryptoCard
										key={id}
										rank={data.rank}
										name={data.name}
										symbol={data.ticker}
										mentions={data.mentions}
										upvotes={data.upvotes}
										bookmarked={props.bookmarks.includes(data.ticker)}
										isLoggedIn={props.isLoggedIn}
									/>
								);
							})}
					</tbody>
				</Table>
			)}
		</div>
	);
}

export default CryptoTable;
