'use strict'
class StartUp {
    
    static registerConfig(options) {

    }

    static registerPlugins(fastify, options) {
        fastify.register(import('../plugins/auth/auth-context.js'), options)
    }

    static registerRoutes(fastify, options) {
        fastify.register(import('../routes/auth/permission.js'))
    }

    static registerServices(options) {

    }

    static start(options){

    }

    static stop(options){
        try {

        } catch {

        }
    }
}

export default StartUp