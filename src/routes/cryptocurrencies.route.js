import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.get('/', CryptocurrenciesController.getAll);
router.get('/r/all', CryptocurrenciesController.getAll);
router.get('/r/cryptocurrency', CryptocurrenciesController.getCryptocurrency);

export { router as cryptocurrenciesRouter };