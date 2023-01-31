import usersModel from '../database/models/User';
import * as JWT from 'jsonwebtoken';

const userLogin = async (email: string, password: string) => {
  
    const data = await usersModel.findOne({ where: { email } });
    if (!data) {
      return { code: 404, type: 'NOT_AUTH', message: 'Email não encontrado' };
    }
   
    function verifyPassword(reqPassword: string, dbPassword: string) {
      if (reqPassword === dbPassword) {
        return true;
      }
      return false;
    }
    


    const verify = verifyPassword(password  , data.password);

    if (!verify) {
      return { code: 401, type: 'NOT_AUTH', message: 'Email ou senha incorretas' };
    }
    //
   
    const createToken = (token: number) => {
      const tokenData = { id: data.id, username: data.username, email: data.email };
        return JWT.sign(tokenData, process.env.JWT_SECRET as string, {
        expiresIn: '1d',
        algorithm: 'HS256',
      });
    };
    
    const token = createToken(data.id)


    return { code: 200, type: 'AUTH', message: 'Login success!', token };
  };  
  
  const userRegister = async (username: string, email: string, password: string) => {
    let data = await usersModel.findOne({ where: { email } });

    if (data) {
      return { code: 409, type:'ERROR', message: 'Usuário existe!' };
    }
  console.log(username);
  
    const dataValues = await usersModel.create({
      username,
      email,
      // password: md5Password,
      password,
      role: 'customer',
    });
    data = dataValues;
    console.log(data)
  
    // const token = createToken(data.id);
  
    return { data, code: 201, dataValues };
  };


  export default { userLogin, userRegister };
