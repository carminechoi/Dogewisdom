// import models, { sequelize } from '../models';
import axios from 'axios';


class CryptocurrenciesService {
	static async getAll() {
		try  {
			await axios.get('https://apewisdom.io/api/v1.0/filter/all-crypto/page/1')
			.then ( (response) => {
				console.log(response.data);
				return response.data;
			});
		} catch (e) {
			throw Error('Error getting all from ape');
		}
	}
}

export { CryptocurrenciesService };