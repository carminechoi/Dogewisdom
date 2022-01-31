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

	static async getCryptocurrency() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/CryptoCurrency/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getCryptocurrencies() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/CryptoCurrencies/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getBitcoin() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/Bitcoin/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getSatoshiStreetBets() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/SatoshiStreetBets/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getCryptoMoonShots() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/CryptoMoonShots/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getEthTrader() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/EthTrader/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}

	static async getEthereum() {
		try  {
			const url = 'https://apewisdom.io/api/v1.0/filter/Ethereum/page/1';
			const response = await axios.get(url);
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}
}

export { CryptocurrenciesService };