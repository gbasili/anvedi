const dbConfig = require("../../../../src/infrastructure/sequelize/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USERNAME, dbConfig.PASSWORD, {
  dialect: dbConfig.DIALECT,
  storage: dbConfig.STORAGE, 
  dialectOptions: dbConfig.DIALECT_OPTIONS
});

const UserModel = {};

UserModel.sequelize = sequelize;
UserModel.permissions = require("../entity/permission")(sequelize);
module.exports = UserModel;