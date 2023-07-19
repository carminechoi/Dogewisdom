import { Pool } from 'pg';
import { config } from '../../config';

const connectionString = config.production.url;

const pool = new Pool({
	connectionString: connectionString,
	ssl: {
			rejectUnauthorized: false,
	}
});

async function query(text, params) {
	const data = await pool.query(text, params);
	return data;
}

module.exports = {
	query,
}