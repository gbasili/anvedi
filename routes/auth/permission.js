'use strict'
import S from 'fluent-json-schema'
import PermissionDTO from '../../plugins/auth/dto/permission.js';
import UseCase from '../../plugins/auth/use-case/index.js'
import Command  from '../../plugins/auth/services/permission-command-service.js'
import Query from '../../plugins/auth/services/permission-query-service.js'

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
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: { type: 'integer' }
            },
            additionalProperties: false
        }
    }

    const schemaPermissionReadAll = {
        body: {
            type: 'object',
            required: [],
            properties: {
                q: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            f: { type: "string" },
                            o: { type: "string" },
                            v: { type: "string" },
                            t: { type: "string" },
                        },
                        required: [ "f", "o", "v", "t" ]
                    }
                },
                s: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            f: { type: "string" },
                            a: { type: "boolean" }
                        },
                        required: ["f", "a"]
                    }
                }, 
                p: {
                    type: "object",
                    required: ["l", "o"],
                    properties: {
                        l: { type: "integer" },
                        o: { type: "integer" },
                    },
                    additionalProperties: false
                },
                i: {
                    type: "array",
                    items: { type: "string" }
                },
                l: {
                    type: "array",
                    items: { type: "string" }
                }
            },
            additionalProperties: false
        }
    }

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
    }

    const schemaPermissionDelete = {
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: { type: 'integer' }
            },
            additionalProperties: false
        }
    }

    // create
    fastify.post('/permission', { schema: schemaPermissionCreate },  async (request, reply) => {
        const permission = new PermissionDTO(0, request.body.Code, request.body.Name)
        const useCase = new UseCase.Create.PermissionCreateRequest(permission)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Create(useCase)
    })

    // read
    fastify.get('/permission/:id', { schema: schemaPermissionRead },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadOneRequest(request.params.id)
        const permissionQueryService = new Query.PermissionQueryService(fastify.authContext)
        return permissionQueryService.ReadOne(useCase)
    })
    
    // readAll
    fastify.post('/permissions', { schema: schemaPermissionReadAll },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadAllRequest(request.body.q, request.body.s, request.body.p, request.body.i, request.body.l)
        const permissionQueryService = new Query.PermissionQueryService(fastify.authContext)
        return permissionQueryService.ReadAll(useCase)
    })

    // update
    fastify.put('/permission', { schema: schemaPermissionUpdate },  async (request, reply) => {
        const permission = new DTO.PermissionDTO(request.body.Id, request.body.Code, request.body.Name)
        const useCase = new UseCase.Update.PermissionUpdateRequest(permission)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Update(useCase)
    })

    // delete
    fastify.delete('/permission/:id', { schema: schemaPermissionDelete },  async (request, reply) => {
        const useCase = new UseCase.Delete.PermissionDeleteRequest(request.params.id)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Delete(useCase)
    })
}

export default rPermissions