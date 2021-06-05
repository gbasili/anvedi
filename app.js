'use strict'
import fastify from 'fastify'

function build(startup, opts={}) {
    startup.start()
    
    const app = fastify(opts.fastifyOptions)

    app.get('/', async function (request, reply) {
        return { hello: 'world' }
    })

    // routes
    startup.registerRoutes(app, opts)
    
    // plugins
    startup.registerPlugins(app, opts.config)
    
    // models
    //const authContext = import("./src/domain/user/models");
    //app.decorate('authContext', authContext.authContext)

    return app
}

export default build