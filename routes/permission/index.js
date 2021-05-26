const S = require('fluent-json-schema')
const DTO = require('../../src/domain/user/dto/permission')
const UseCase = require('../../src/domain/user/use-case/permission-create')
const PermissionCommandService = require('../../src/application/user/permission-command-service')
const PermissionQueryService = require('../../src/application/user/permission-query-service')

async function rPermissions (fastify, options) {

    const bodyJsonSchemaPermission = S.object()
        .additionalProperties(false)
        .prop('Name', S.string().required())

    const schemaPermissionCreate = { body: bodyJsonSchemaPermission }
    
    fastify.post('/permission', { schemaPermissionCreate },  async (request, reply) => {
        const permission = new DTO.PermissionDTO(0, request.body.Name)
        const useCase = new UseCase.PermissionCreateRequest(permission)
        const permissionCommandService = new PermissionCommandService.PermissionCommandService()

        return permissionCommandService.Create(useCase)
    })

}

module.exports = rPermissions