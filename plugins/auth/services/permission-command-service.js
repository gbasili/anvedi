'use strict'
import BaseCommand from '../../anvedi/services/base-command-service.js'
import UseCase  from '../use-case/index.js'
import K  from '../../anvedi/constants.js'
import Mapper from '../mappers/permission-mapper.js'

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor(authContext) {
        super()
        this.authContext = authContext;
    }

    async Create(useCase) {
        try {
            const t = await this.authContext.beginTransaction()
            const permission = await this.authContext.permissions.create(useCase.Permission, { transaction: t });
            this.authContext.commit()
            useCase.Permission.Id = permission.Id
            return new UseCase.Create.PermissionCreateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.authContext.rollback()
            return new UseCase.PermissionCreateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Update(useCase) {
        try {
            const t = await this.authContext.beginTransaction()
            var p = await this.authContext.permissions.findByPk(useCase.Permission.Id);
            if (p == null){
                return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.NOT_FOUND)
            }
            Mapper.PermissionMapper.ToEntity(useCase.Permission, p)
            await p.save({ transaction: t });
            this.authContext.commit()
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.authContext.rollback()
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Delete(useCase) {
        try {
            const t = await this.authContext.beginTransaction()
            var p = await this.authContext.permissions.findByPk(useCase.Id);
            if (p == null){
                return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.NOT_FOUND)
            }
            await p.destroy({ transaction: t })
            this.authContext.commit()
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.authContext.rollback()
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}

export default {
    PermissionCommandService
}