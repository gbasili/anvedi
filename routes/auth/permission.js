'use strict'
import PermissionDTO from '../../plugins/auth/dto/permission.js';
import UseCase from '../../plugins/auth/use-case/index.js'
import Command  from '../../plugins/auth/services/permission-command-service.js'
import Query from '../../plugins/auth/services/permission-query-service.js'
import S from './permission-schema.js'

async function rPermissions (fastify, options) {

    // create
    fastify.post('/permission', { schema: S.schemaPermissionCreate },  async (request, reply) => {
        const permission = new PermissionDTO(0, request.body.Code, request.body.Name)
        const useCase = new UseCase.Create.PermissionCreateRequest(permission)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Create(useCase)
    })

    // read
    fastify.get('/permission/:id', { schema: S.schemaPermissionRead },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadOneRequest(request.params.id)
        const permissionQueryService = new Query.PermissionQueryService(fastify.authContext)
        return permissionQueryService.ReadOne(useCase)
    })
    
    // readAll
    fastify.post('/permissions', { schema: S.schemaPermissionReadAll },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadAllRequest(request.body.q, request.body.s, request.body.p, request.body.i, request.body.l)
        const permissionQueryService = new Query.PermissionQueryService(fastify.authContext)
        return permissionQueryService.ReadAll(useCase)
    })

    // update
    fastify.put('/permission', { schema: S.schemaPermissionUpdate },  async (request, reply) => {
        const permission = new DTO.PermissionDTO(request.body.Id, request.body.Code, request.body.Name)
        const useCase = new UseCase.Update.PermissionUpdateRequest(permission)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Update(useCase)
    })

    // delete
    fastify.delete('/permission/:id', { schema: S.schemaPermissionDelete },  async (request, reply) => {
        const useCase = new UseCase.Delete.PermissionDeleteRequest(request.params.id)
        const permissionCommandService = new Command.PermissionCommandService(fastify.authContext)
        return permissionCommandService.Delete(useCase)
    })
}

export default rPermissions