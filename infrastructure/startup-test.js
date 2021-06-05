'use strict'
class StartUpTest {
    
    static registerConfig(options) {

    }

    static registerPlugins(fastify, options) {
        fastify.register(import('../plugins/auth/auth-context.js'), options)
    }

    static registerRoutes(fastify, options) {
        fastify.register(import('../routes/auth/permission.js'), options)
    }

    static registerServices(fastify, options) {
        fastify.register(import('../plugins/auth/services/service-container.js'), options)
    }

    static start(options){

    }

    static stop(options){

    }
}

export default StartUpTest