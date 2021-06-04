'use strict'
import fp from 'fastify-plugin'
import Sequelize from 'sequelize'
import SequelizeContext from '../anvedi/data/sequelize/sequelize-context.js'
import permission from './entities/permission.js'

async function authContext(fastify, opts) {
    
    const sequelize = new Sequelize(
        opts.db_anvedi_database, 
        opts.db_anvedi_username, 
        opts.db_anvedi_password, 
        {
            dialect: opts.db_anvedi_dialect,
            dialectOptions: opts.db_anvedi_dialect_options || {},
            storage: opts.db_anvedi_storage, 
            logging: opts.db_anvedi_logging
        }
    );
    await sequelize.sync();

    const authContextInstance = new AuthContext(sequelize);

    fastify.decorate('authContext', authContextInstance)
}

class AuthContext extends SequelizeContext {

    constructor(sequelize){
        super(sequelize)
        this.permissions = permission(sequelize)
    }

}

export default fp(authContext, {
    name: 'authContext'
})