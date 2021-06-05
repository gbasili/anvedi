'use strict'
import tap from 'tap'
import config  from '../../../config.js'
import K  from '../../../plugins/anvedi/constants.js'
import startup  from '../../../infrastructure/startup-test.js'
import Helper  from '../../helper.js'
const helper = new Helper()

let qo = helper.getQueryOptions()

tap.test('GET `/permission/1` route', t => {
  t.plan(4)
 
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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
  const fastify = helper.buildFastify(startup, config, {})
  t.teardown(() => helper.terminate(startup, fastify))

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