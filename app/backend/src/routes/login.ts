import { Router } from 'express';

import loginController from '../controllers/login';

const loginRoute = Router();

loginRoute.post('/', loginController.userLogin);


export default loginRoute;