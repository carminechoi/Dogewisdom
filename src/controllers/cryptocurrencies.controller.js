import { CryptocurrenciesService } from '../services';

class CryptocurrenciesController {
    static getAll = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getAll()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getCryptocurrency = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getCryptocurrency()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getCryptocurrencies = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getCryptocurrencies()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getBitcoin = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getBitcoin()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getSatoshiStreetBets = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getSatoshiStreetBets()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getCryptoMoonShots = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getCryptoMoonShots()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getEthTrader = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getEthTrader()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }

    static getEthereum = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getEthereum()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
}



export { CryptocurrenciesController };