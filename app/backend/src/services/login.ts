import usersModel from '../database/models/User';
// import JWT from '../utils/jwt'

const userLogin = async (email: string) => {
  
    const result = await usersModel.findOne({ where: { email } });
    if (!result) {
      return { code: 404, type: 'NOT_AUTH', message: 'Incorrect email or password' };
    }
   
    return { code: 200, type: 'AUTH', message: 'Login success!' };
  };  

  export default { userLogin };
