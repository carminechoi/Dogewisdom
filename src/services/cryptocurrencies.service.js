// import models, { sequelize } from '../models';
import axios from 'axios';


class CryptocurrenciesService {
	static async getAll() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/all-crypto/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}
}

export { CryptocurrenciesService };