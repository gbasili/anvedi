'use strict'

static class StartUp {
    
    static registerConfig(options) {

    }

    static registerPlugins(fastify, options) {

    }

    static registerRoutes(fastify, options) {
        fastify.register(import('../routes/auth/permission.js'))
    }

    static registerServices(options) {

    }

    static start(options){

    }

    static stop(options){

    }
}

export default StartUp