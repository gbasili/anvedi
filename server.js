'use strict'
import config  from './config.js'
import app from './app.js'

const server = app({
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
    process.exit(1)
  }
})