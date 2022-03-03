import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.use('/login', UserController.postLogin);
router.post('/register', UserController.postRegister);
router.get('/user', UserController.getUser);

export { router as userRouter };