const config = require("../../../../config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db_user_database, config.db_user_username, config.db_user_password, {
  dialect: config.db_user_dialect,
  dialectOptions: config.db_user_dialect_options || {},
  storage: config.db_user_storage, 
  logging: config.db_user_logging
});
sequelize.sync();

//const UserModel = {};
//UserModel.sequelize = sequelize;
//UserModel.managedTransaction = sequelize.transaction;
//UserModel.permissions = require("../entity/permission")(sequelize);

class UserModel {
  constructor(sequelize){
    this.sequelize = sequelize
    this.permissions = require("../entity/permission")(sequelize)
    this.transaction = null
  }

  async beginTransaction(cb){
    this.transaction = await sequelize.transaction()
    return this.transaction
  }

  commit(){
    this.transaction.commit()
  }

  rollback(){
    this.transaction.rollback()
  }
}

var userModelInstance = new UserModel(sequelize);

module.exports = {
  userContext: userModelInstance
}