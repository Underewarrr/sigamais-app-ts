export interface IUser {
    id?: number;
    username: string;
    role: string
    email: string;
    password?: string;
  };  

export interface IJwt {
    id?: number,
    username: string,
    role: string,
    email: string,
    iat: number,
    exp: number
  };