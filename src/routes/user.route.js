import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.post('/login', UserController.postLogin);
router.post('/register', UserController.postRegister);
router.get('/user', UserController.getUser);
router.post('/user/bookmark', UserController.postBookmark);

export { router as userRouter };