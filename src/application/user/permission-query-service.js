const BaseQuery = require('../base/base-query-service')
const UseCase = require('../../domain/user/use-case')
const Mapper = require('../../domain/user/mapper/permission-mapper')
const QueryHelper = require('../../domain/user/models/helper')
const K = require('../../domain/constants')


class PermissionQueryService extends BaseQuery.BaseQueryService {
    
    constructor(userModel) {
        super()
        this.userModel = userModel;
    }

    async ReadOne(useCase) {
        try {
            const entity = await this.userModel.permissions.findByPk(useCase.id);
            if (entity == null){
                return new UseCase.Read.PermissionReadOneResponse(null, K.ResulCode.NOT_FOUND) 
            }
            const dto = Mapper.PermissionMapper.ToDto(entity)
            return new UseCase.Read.PermissionReadOneResponse(dto, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Read.PermissionReadOneResponse(null, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async ReadAll(useCase) {
        try {
            const where = QueryHelper.GetWhere(useCase.queryAtoms);
            const options = QueryHelper.GetOptions(where, useCase.queryAtoms, useCase.sortingAtoms, useCase.pager, useCase.includeAtoms, useCase.loadAtoms);
            const entities = await this.userModel.permissions.findAll(options);
            const permissions = Mapper.PermissionMapper.ToDto(entities)
            const total = await this.userModel.permissions.count({ where: where });
            return new UseCase.Read.PermissionReadAllResponse(permissions, total, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Read.PermissionReadAllResponse(null, 0, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}

module.exports = {
    PermissionQueryService
}