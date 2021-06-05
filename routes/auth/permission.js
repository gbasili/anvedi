'use strict'
import PermissionDTO from '../../plugins/auth/dto/permission.js';
import UseCase from '../../plugins/auth/use-case/index.js'
import S from './permission-schema.js'

async function rPermissions (fastify, options) {

    // create
    fastify.post('/permission', { schema: S.schemaPermissionCreate },  async (request, reply) => {
        const permission = new PermissionDTO(0, request.body.Code, request.body.Name)
        const useCase = new UseCase.Create.PermissionCreateRequest(permission)
        return fastify.authServiceContainer.getPermissionCommandService().Create(useCase)
    })

    // read
    fastify.get('/permission/:id', { schema: S.schemaPermissionRead },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadOneRequest(request.params.id)
        return fastify.authServiceContainer.getPermissionQueryService().ReadOne(useCase)
    })
    
    // readAll
    fastify.post('/permissions', { schema: S.schemaPermissionReadAll },  async (request, reply) => {
        const useCase = new UseCase.Read.PermissionReadAllRequest(request.body.q, request.body.s, request.body.p, request.body.i, request.body.l)
        return fastify.authServiceContainer.getPermissionQueryService().ReadAll(useCase)
    })

    // update
    fastify.put('/permission', { schema: S.schemaPermissionUpdate },  async (request, reply) => {
        const permission = new PermissionDTO(request.body.Id, request.body.Code, request.body.Name)
        const useCase = new UseCase.Update.PermissionUpdateRequest(permission)
        return fastify.authServiceContainer.getPermissionCommandService().Update(useCase)
    })

    // delete
    fastify.delete('/permission/:id', { schema: S.schemaPermissionDelete },  async (request, reply) => {
        const useCase = new UseCase.Delete.PermissionDeleteRequest(request.params.id)
        return fastify.authServiceContainer.getPermissionCommandService().Delete(useCase)
    })
}

export default rPermissions