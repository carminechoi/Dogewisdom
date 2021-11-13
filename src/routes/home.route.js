import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'hello from server!'});
});

router.get('/api', (req, res) => {
    res.status(200).json({message: 'hello from api!'});
});

export { router as homeRouter };