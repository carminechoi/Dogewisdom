import { CryptocurrenciesService } from '../services';

class CryptocurrenciesController {
    static async get(req, res, next) {
        try {
            const { id } = req.params;
            const cryptocurrenciesObject = await CryptocurrenciesService.get(id);
            if (!cryptocurrenciesObject) {
              throw new Error(`Cryptocurrency with primary key ${ id } not found`);
            }
            // res.locals.data = cryptocurrenciesObject;
            return next();
        } catch (error) {
            return next (error);
        }
    }
    
    static async getAll(req, res, next) {
        try {
            const { id } = req.params;
            const cryptocurrenciesObject = await CryptocurrenciesService.getAll(id);
            if (!cryptocurrenciesObject) {
              throw new Error(`Cryptocurrency with primary key ${ id } not found`);
            }
            // res.locals.data = cryptocurrenciesObject;
            return next();
        } catch (error) {
            return next (error);
        }
    }
}

export { CryptocurrenciesController };