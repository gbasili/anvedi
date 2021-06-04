'use strict'
import BaseQuery from '../../anvedi/services/base-query-service.js'
import UseCase  from '../use-case/index.js'
import Mapper from '../mappers/permission-mapper.js'
import K  from '../../anvedi/constants.js'
import QueryHelper from '../../anvedi/data/sequelize/helper.js'

class PermissionQueryService extends BaseQuery.BaseQueryService {
    constructor(authContext) {
        super()
        this.authContext = authContext;
    }

    async ReadOne(useCase) {
        try {
            const entity = await this.authContext.permissions.findByPk(useCase.id);
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
            const entities = await this.authContext.permissions.findAll(options);
            const permissions = Mapper.PermissionMapper.ToDto(entities)
            const total = await this.authContext.permissions.count({ where: where });
            return new UseCase.Read.PermissionReadAllResponse(permissions, total, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Read.PermissionReadAllResponse(null, 0, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }
}

export default { PermissionQueryService }