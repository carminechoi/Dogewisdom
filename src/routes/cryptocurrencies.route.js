import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.get('/', CryptocurrenciesController.getAll);

export { router as cryptocurrenciesRouter };