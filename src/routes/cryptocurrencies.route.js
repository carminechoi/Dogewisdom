import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.use('/cryptocurrencies', CryptocurrenciesController.getCryptoData);

export { router as cryptocurrenciesRouter };