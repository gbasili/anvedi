const { Sequelize, DataTypes, Model } = require('sequelize');
const Entity = require('../../base/entity/base-entity')
const K = require('../../constants')

module.exports = (sequelize) => {
    
    class Permission extends Entity.BaseEntity {}
    
    Permission.init({
        // Model attributes are defined here
        Id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        Code: {
          type: DataTypes.STRING(K.DataLength.Permission.Code),
          allowNull: false
        },
        Name: {
            type: DataTypes.STRING(K.DataLength.Permission.Name),
            allowNull: false
        }
      }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Permission', // We need to choose the model name,
            timestamps: false,
            tableName: 'USR_Permission'
      });
    return Permission;
  };