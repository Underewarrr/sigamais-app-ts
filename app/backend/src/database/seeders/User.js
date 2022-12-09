module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('users', [
        {
          username: 'Admin',
          role: 'admin',
          email: 'admin@admin.com',
          password: 'B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu'
        },
        {
          username: 'User',
          role: 'user',
          email: 'user@user.com',
          password: 'B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu', 

        },
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('users', null, {});
    },
  };