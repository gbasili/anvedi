const UserModel = require("./src/domain/user/models");
const Permsission = UserModel.permissions; 
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = UserModel.sequelize;
/*
class Permission2 extends Model {

}
Permission2.init({
  // Model attributes are defined here
  Id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
  },
  Name: {
      type: DataTypes.STRING(100),
      allowNull: false
  }
}, {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Permission', // We need to choose the model name,
      timestamps: false,
      tableName: 'USR_Permission'
});

const permission = {
  Name: 'prova'
};
*/

UserModel.sequelize.sync({ force: true}).then(() => {
  const permsission = { Code: 'Va', Name: 'Prova'};

  UserModel.permissions.create(permsission)
    .then((data) => {
      console.log("ok" + permsission.Id);
    }).catch((err) => {
      console.log("ko: " + err);
    });
});


// const { Sequelize, DataTypes, Model } = require('sequelize');

// const sequelize = new Sequelize('', '', '', {
//     dialect: 'sqlite',
//     storage: 'db/anvedi.db', // or ':memory:'
//     dialectOptions: {
//       // Your sqlite3 options here
//     }
//   });

// class Permission extends Model {}

// Permission.init({
//   // Model attributes are defined here
//   Id: {
//     primaryKey: true,
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   Name: {
//     type: DataTypes.STRING(100),
//     allowNull: false
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'Permission', // We need to choose the model name,
//   timestamps: false,
//   tableName: 'USR_Permission'
// });

// Permission.sync({ force: true });

// // the defined model is the class itself
// console.log(Permission === sequelize.models.Permission); // true