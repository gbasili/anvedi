// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
// config
const config = require('./config');

// routes
fastify.register(require('./routes/login'))
fastify.register(require('./routes/permission'))
fastify.register(require('./routes/users'))

// models
const userContext = require("./src/domain/user/models");


fastify.decorate('userContext', userContext.userContext)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(config.port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()