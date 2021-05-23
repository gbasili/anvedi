const S = require('fluent-json-schema')

async function rUsers (fastify, options) {

    fastify.post('/users/create', async (request, reply) => {
        return { message: 'Create Not Implemented yet' }
    })

    fastify.get('/users/:id', async (request, reply) => {
        return { message: 'Get Not Implemented yet' }
    })

    fastify.get('/users', async (request, reply) => {
        return { message: 'Get all Not Implemented yet' }
    })

    fastify.post('/users/update/:id', async (request, reply) => {
        return { message: 'Update Not Implemented yet' }
    })

    fastify.post('/users/delete/:id', async (request, reply) => {
        return { message: 'Delete Not Implemented yet' }
    })

}

module.exports = rUsers