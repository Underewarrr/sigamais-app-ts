import { Request, Response } from 'express';
// import { IJwt, IUser } from '../interfaces/interfaces';
import loginService from '../services/login';

const userLogin = async (req: Request, res: Response) => {
    const { email } = req.body;
    console.log(email)
    const { type, message, code } = await loginService.userLogin(email);
if (type === 'NOT_AUTH') {
    return res.status(code).json({ message });
    }
    return res.status(code).json({ message });
};
 export default { userLogin };


