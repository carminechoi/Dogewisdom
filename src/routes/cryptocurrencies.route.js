import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.get('/', CryptocurrenciesController.getAll);
router.get('/All', CryptocurrenciesController.getAll);
router.get('/r/Cryptocurrency', CryptocurrenciesController.getCryptocurrency);
router.get('/r/Cryptocurrencies', CryptocurrenciesController.getCryptocurrencies);
router.get('/r/Bitcoin', CryptocurrenciesController.getBitcoin);
router.get('/r/SatoshiStreetBets', CryptocurrenciesController.getSatoshiStreetBets);
router.get('/r/CryptoMoonShots', CryptocurrenciesController.getCryptoMoonShots);
router.get('/r/EthTrader', CryptocurrenciesController.getEthTrader);
router.get('/r/Ethereum', CryptocurrenciesController.getEthereum);

export { router as cryptocurrenciesRouter };