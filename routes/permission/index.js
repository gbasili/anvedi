const S = require('fluent-json-schema')
const DTO = require('../../src/domain/user/dto/permission')
const UseCase = require('../../src/domain/user/use-case')
const Command = require('../../src/application/user/permission-command-service')
const Query = require('../../src/application/user/permission-query-service')

async function rPermissions (fastify, options) {
    
    const schemaPermissionCreate = {
        body: {
            type: 'object',
            required: ['Code', 'Name'],
            properties: {
                Code: { type: 'string', 'maxLength': 4 },
                Name: { type: 'string', 'maxLength': 100 }
            },
            additionalProperties: false
        }
    };

    const schemaPermissionRead = {
        body: {
            type: 'object',
            required: ['Id'],
            properties: {
                Code: { type: 'integer' }
            },
            additionalProperties: false
        }
    };

    const schemaPermissionReadAll = {
        body: {
            type: 'object',
            required: [],
            properties: {},
            additionalProperties: false
        }
    };

    const schemaPermissionUpdate = {
        body: {
            type: 'object',
            required: ['Id', 'Code', 'Name'],
            properties: {
                Id: { type: 'integer', 'minimum': 1 },
                Code: { type: 'string', 'maxLength': 4 },
                Name: { type: 'string', 'maxLength': 100 }
            },
            additionalProperties: false
        }
    };

    fastify.post('/permission', { schema: schemaPermissionCreate },  async (request, reply) => {
        const permission = new DTO.PermissionDTO(0, request.body.Code, request.body.Name)
        const useCase = new UseCase.Create.PermissionCreateRequest(permission)
        const permissionCommandService = new Commmand.PermissionCommandService(fastify.userModel)
        return permissionCommandService.Create(useCase)
    })

    fastify.post('/permissions', { schema: schemaPermissionReadAll },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadAllRequest()
        const permissionQueryService = new Query.PermissionQueryService(fastify.userModel)
        return permissionQueryService.ReadAll(useCase)
    })

    fastify.put('/permission', { schema: schemaPermissionUpdate },  async (request, reply) => {
        const permission = new DTO.PermissionDTO(request.body.Id, request.body.Code, request.body.Name)
        const useCase = new UseCase.Update.PermissionUpdateRequest(permission)
        const permissionCommandService = new Command.PermissionCommandService(fastify.userModel)
        return permissionCommandService.Update(useCase)
    })

}

module.exports = rPermissions