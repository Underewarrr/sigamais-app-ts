import { Request, Response } from 'express';
// import { IJwt, IUser } from '../interfaces/interfaces';
import loginService from '../services/user';

const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email)
    const { type, message, code, token } = await loginService.userLogin(email, password);

if (type === 'NOT_AUTH') {
    return res.status(code).json({ message });
    }
    return res.status(code).json({ message, token });
};

const userRegister = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    const { data, type, message, code, } = await loginService.userRegister(username, email, password);

    if (!data) {
        return res.status(code).json({ message });
      }
    
      return res.status(code).json({ ...data });
    };

 export default { userLogin, userRegister };


