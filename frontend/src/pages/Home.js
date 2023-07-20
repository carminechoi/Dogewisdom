import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navbar/Navbar.js";
import SubredditBar from "../components/SubredditBar/SubredditBar.js";
import CryptoTable from "../components/Cards/CryptoTable";

import AuthService from "../services/AuthService";

function Home() {
	const [subreddit, setSubreddit] = useState("All");
	const [username, setUsername] = useState("");
	const [bookmarks, setBookmarks] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// componentDidMount
		AuthService.getUserInfo().then((user) => {
			if (user) {
				setUsername(user.data.username);
				setBookmarks(user.data.bookmarks);
				setIsLoggedIn(true);
			}
		});
		// componentWillUnmount
		return () => {};
	}, []);

	return (
		<div className="homepage">
			<NavigationBar username={username} />
			<SubredditBar subreddit={subreddit} setSubreddit={setSubreddit} />
			<div className="mx-2">
				<CryptoTable
					subreddit={subreddit}
					bookmarks={bookmarks}
					isLoggedIn={isLoggedIn}
				/>
			</div>
		</div>
	);
}

export default Home;
