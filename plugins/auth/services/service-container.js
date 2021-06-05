'use strict'
import fp from 'fastify-plugin'
import PC from './permission-command-service.js'
import PQ from './permission-query-service.js'

async function authServiceContainer(fastify, opts) {
    const serviceContainer = new AuthServiceContainer(fastify.authContext);
    fastify.decorate('authServiceContainer', serviceContainer)
}

class AuthServiceContainer {
    constructor(authContext){
        this.authContext = authContext
    }
    
    getPermissionCommandService(){
        return new PC.PermissionCommandService(this.authContext)
    }

    getPermissionQueryService(){
        return new PQ.PermissionQueryService(this.authContext)
    }
}

export default fp(authServiceContainer, {
    name: 'authServiceContainer'
})