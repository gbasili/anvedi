const config = require("../../../../config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db_user_database, config.db_user_username, config.db_user_password, {
  dialect: config.db_user_dialect,
  dialectOptions: config.db_user_dialect_options || {},
  storage: config.db_user_storage, 
  logging: config.db_user_logging
});

const UserModel = {};

UserModel.sequelize = sequelize;
UserModel.permissions = require("../entity/permission")(sequelize);
module.exports = UserModel;