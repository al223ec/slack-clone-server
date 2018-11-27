import Sequelize from 'sequelize';
// const config = require(`${__dirname}/../config/config.js`)[env];
const config = {
  database: 'slack',
  username: 'postgres',
  password: 'postgres',
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'postgres',
  underscored: true,
});

// const env = process.env.NODE_ENV || 'development';

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
};

// Object.keys(models).reduce((acc, curr) => {
// }, {})

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
