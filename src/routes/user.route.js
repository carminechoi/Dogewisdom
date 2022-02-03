import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.post('/login', UserController.postLogin);
router.post('/register', UserController.postRegister);

export { router as userRouter };