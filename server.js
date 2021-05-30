// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const userModel = require("./src/domain/user/models");
userModel.sequelize.sync();

fastify.decorate('userModel', userModel)

fastify.register(require('./routes/login'))
fastify.register(require('./routes/permission'))
fastify.register(require('./routes/users'))

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()