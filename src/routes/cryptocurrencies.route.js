import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.get('/', CryptocurrenciesController.getAll);
router.get('/r/All', CryptocurrenciesController.getAll);
router.get('/r/Cryptocurrency', CryptocurrenciesController.getCryptocurrency);

export { router as cryptocurrenciesRouter };