'use strict'
import S from 'sequelize';
const { Sequelize, DataTypes, Model } = S;
import BaseEntity from '../../anvedi/domain/entities/base-entity.js'
import K from '../constants.js'

const Permission = function(sequelize){
  
  class Permission extends BaseEntity {}
    
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
}

export default Permission
