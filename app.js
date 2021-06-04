'use strict'
import fastify from 'fastify'

function build(opts={}) {
    const app = fastify(opts.fastifyOptions)

    app.get('/', async function (request, reply) {
        return { hello: 'world' }
    })

    // routes
    app.register(import('./routes/auth/permission.js'))
    
    // plugins
    app.register(import('./plugins/auth/auth-context.js'), opts.config)

    // models
    //const authContext = import("./src/domain/user/models");
    //app.decorate('authContext', authContext.authContext)

    return app
}

export default build