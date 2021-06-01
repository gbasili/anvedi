const BaseQuery = require('../base/base-query-service')
const UseCase = require('../../domain/user/use-case')
const Mapper = require('../../domain/user/mapper/permission-mapper')

class PermissionQueryService extends BaseQuery.BaseQueryService {
    
    constructor(userModel) {
        super()
        this.userModel = userModel;
    }

    async ReadAll(request) {
        try {
            const entities = await this.userModel.permissions.findAll();
            const permissions = Mapper.PermissionMapper.ToDto(entities)
            return new UseCase.Read.PermissionReadAllResponse(permissions, 200)
        } catch(ex) {
            console.log(ex)
            return new UseCase.PermissionCreateResponse(request.Permission, 500)
        }
    }

}

module.exports = {
    PermissionQueryService
}