import * as JWT from 'jsonwebtoken';
import { IUser } from '../interfaces/interfaces';

require('dotenv/config');

const createToken = (user: IUser) => {
  const data = { id: user.id, username: user.username, role: user.role, email: user.email };
  return JWT.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
};

const verifyToken = (token: string) => {
  try {
    const data = JWT.verify(token, process.env.JWT_SECRET as string);

    return { type: 'AUTH', data };
  } catch (_e) {
    return { type: 'NOT_AUTH', message: 'Token must be a valid token' };
  }
};

export default {
  createToken,
  verifyToken,
};