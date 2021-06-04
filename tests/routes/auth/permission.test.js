'use strict'
import tap from 'tap'
import buildFastify  from '../../../app.js'
import config  from '../../../config.js'
import K  from '../../../plugins/anvedi/constants.js'
let qo = {
  "s": [{ "f": "Id", "a": false }],
  "p": { "l": 20, "o": 0 },
  "l":[],
  "i": []
}

tap.test('GET `/permission/1` route', t => {
  t.plan(4)
 
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  fastify.inject({
    method: 'GET',
    url: '/permission/1',
    body: {}
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.Permission.Id, 1)
  })
})

tap.test('POST `/permissions` eq Id=10', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.EQUAL_TO, "v": 10, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 1)
  })
})

tap.test('POST `/permissions` not equalto 1', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.NOT_EQUAL_TO, "v": 1, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 19)
  })
})

tap.test('POST `/permissions` lt 6', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.LESS_THAN, "v": 6, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 5)
  })
})

tap.test('POST `/permissions` lte 10', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.LESS_THAN_OR_EQUAL_TO, "v": 10, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 10)
  })
})

tap.test('POST `/permissions` gt 5', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.GREATER_THAN, "v": 5, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 15)
  })
})

tap.test('POST `/permissions` gte 15', t => {
  t.plan(4)
  const fastify = buildFastify({ config: config, fastifyOptions: {}})
  t.teardown(() => fastify.close())

  qo.q = [ { "f": "Id", "o": K.Operator.GREATER_THAN_OR_EQUAL_TO, "v": 15, "t": "s" }]
  fastify.inject({
    method: 'POST',
    url: '/permissions',
    body: qo
  }, (err, response) => {
    var resObj = response.json()
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(resObj.ResultCode, 200)
    t.equal(resObj.total, 6)
  })
})