import config from '../config.js'
import authContext from '../plugins/auth/auth-context.js';
import f  from 'fastify'
import helper from './helper.js'

// models
const fastify = f()
authContext(fastify, config)

fastify.authContext.sequelize.sync({ force: true}).then(() => {
    helper.initPermissions(fastify.authContext)
})

console.log('bye.');