const bcryptjs = require('bcryptjs');
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    for (let i = 0; i < 20; i++) {
      const password = faker.internet.password();
      users.push({
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password_hash: await bcryptjs.hash(password, 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
