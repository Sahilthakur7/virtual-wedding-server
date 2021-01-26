const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRESQL_CONNECTION_STRING); // Example for postgres

async function testSequalize() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testSequalize();

module.exports = sequelize;
