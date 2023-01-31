import { Router } from 'express';

import userController from '../controllers/user';

const userRoute = Router();

userRoute.post('/login', userController.userLogin);
userRoute.post('/register', userController.userRegister);



export default userRoute;