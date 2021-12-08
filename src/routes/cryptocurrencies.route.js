import { Router } from 'express';
import { CryptocurrenciesController } from '../controllers';


const router = Router();

router.get('/', CryptocurrenciesController.getAll);

// router.get('/:id', CryptocurrenciesController.get);

export { router as cryptocurrenciesRouter };