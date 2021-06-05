'use strict'
import fastify from 'fastify'

function build(startUp, opts={}) {
    startUp.startUp()
    const app = fastify(opts.fastifyOptions)

    app.get('/', async function (request, reply) {
        return { hello: 'world' }
    })

    // routes
    startUp.registerRoutes(app, opts)
    
    // plugins
    app.register(import('./plugins/auth/auth-context.js'), opts.config)

    // models
    //const authContext = import("./src/domain/user/models");
    //app.decorate('authContext', authContext.authContext)

    return app
}

export default build