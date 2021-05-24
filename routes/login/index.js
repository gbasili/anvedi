const S = require('fluent-json-schema')
const UserLogin = require('../../src/domain/user/dto/user-login')

async function rLogin (fastify, options) {
  const bodyJsonSchema = S.object()
    .additionalProperties(false)
    .prop('username', S.string().required())
    .prop('password', S.string().required())
  
  const responseJsonSchema = S.object()
    .prop('200', S.object()
      //.prop('message2', S.string())
    )

  const schema = {
    body: bodyJsonSchema,
    //response: responseJsonSchema
  }

  fastify.post('/login2', { schema },  async (request, reply) => {
    console.log(request.body)
    const user = new UserLogin.UserLogin(request.body.username, request.body.password )
    return { sss2: 'sss2', message2: 'hello ' + user.username + ' - ' + user.password }
  })

  fastify.post('/login', {
    schema: {
      body: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          password: { type: 'string' }
        },
        required: ['username', 'password']
      },
      response: {
        '200': {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    },
    handler (req, reply) {
      reply.send({ sss: 'sss', message: 'hello ' + req.body.username })
    },
    
  })

  
}
  
module.exports = rLogin