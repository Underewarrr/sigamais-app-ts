const verifyPass = (reqPassword: string, dbPassword: string) => {
    if (reqPassword === dbPassword) {
      return true;
    }
    return false;
  }
  
  export default { verifyPass };

  