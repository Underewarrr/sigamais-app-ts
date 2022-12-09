import usersModel from '../database/models/User';
import { IUser } from '../interfaces/interfaces';
import JWT from '../utils/jwt'

const userLogin = async (email: string) => {
  
    const result = await usersModel.findOne({ where: { email } });
    if (!result) {
      return { code: 404, type: 'NOT_AUTH', message: 'Incorrect email or password' };
    }
    const token = JWT.createToken(result);
    return { code: 200, type: 'AUTH', token };
  };  

  export default { userLogin };
