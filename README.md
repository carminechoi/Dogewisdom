# Dogewisdom

Visit the live website: [dogewisdom.com](https://dogewisdom.com)

Dogewisdom is a web application that provides valuable insights into trending cryptocurrencies based on their mentions and upvotes on various subreddits. MongoDB serves as the database to store cryptocurrency data and user information. The website offers a single-page view where users can explore the most talked-about cryptocurrencies on popular subreddits. Additionally, it supports an account system that allows users to bookmark their favorite cryptocurrencies for quick access.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Account System](#account-system)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The world of cryptocurrencies is dynamic and fast-paced, and keeping track of trending coins is crucial for investors and enthusiasts. Dogewisdom simplifies this process by aggregating cryptocurrency data from various Reddit communities, such as r/CryptoCurrency, r/Cryptocurrencies, r/Bitcoin, r/SatoshiStreetBets, r/CryptoMoonShots, r/EthTrader, and r/Ethereum. The website presents an organized list of trending cryptocurrencies, showcasing their rank, name, symbol, mentions, and upvotes, providing users with valuable market insights.

## Features

- Real-time data on trending cryptocurrencies from popular subreddits.
- Sort based on all or a specific subreddit.
- User-friendly and responsive interface for seamless navigation.
- Account system for users to bookmark their favorite cryptocurrencies.
- Continuous deployment of the frontend using Netlify and backend using Render.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/carminechoi/Dogewisdom.git
```

2. Set up the backend and install the required dependencies:

```bash
cd Dogewisdom/backend
npm install
```

3. Run the backend server:

```bash
npm start
```

4. Set up the frontend and install the required dependencies:

```bash
cd ../frontend
npm install
```

5. Run the frontend server:

```bash
npm start
```

## License

The Dogewisdom project is open-source and is licensed under the [MIT License](LICENSE).
