'use strict'
import tap from 'tap'
import config  from '../config.js'
import startup  from '../infrastructure/startup-test.js'
import Helper from './helper.js'
const helper = new Helper()

tap.test('GET `/` route', t => {
  t.plan(4)
  
  const fastify = helper.buildFastify(startup, config, {})

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.teardown(() => helper.terminate(startup, fastify))

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(response.json(), { hello: 'world' })
  })
})
/*
const { test } = require('tap')
const build = require('../app')

test('requests the "/" route', async t => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  t.equal(response.statusCode, 200, 'returns a status code of 200')
})
*/