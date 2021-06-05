'use strict'
import config  from './config.js'
import app from './app.js'
import startup from './infrastructure/startup.js'

const server = app(
  startup, {
  config: config,
  fastifyOptions: {
    logger: {
      level: 'info',
      prettyPrint: true
    }
  }
})

server.listen(config.port, (err, address) => {
  if (err) {
    console.log(err)
    startup.stop()
    process.exit(1)
  }
})