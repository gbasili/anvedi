const BaseCommand = require('../base/base-command-service')
const UseCase = require('../../domain/user/use-case');
const K = require('../../domain/constants')
const Mapper = require('../../domain/user/mapper/permission-mapper')

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor(userContext) {
        super()
        this.userContext = userContext;
    }

    async Create(useCase) {
        try {
            const t = await this.userContext.beginTransaction()
            const permission = await this.userContext.permissions.create(useCase.Permission, { transaction: t });
            this.userContext.commit()
            useCase.Permission.Id = permission.Id
            return new UseCase.Create.PermissionCreateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.userContext.rollback()
            return new UseCase.PermissionCreateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Update(useCase) {
        try {
            const t = await this.userContext.beginTransaction()
            var p = await this.userContext.permissions.findByPk(useCase.Permission.Id);
            if (p == null){
                return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.NOT_FOUND)
            }
            Mapper.PermissionMapper.ToEntity(useCase.Permission, p)
            await p.save({ transaction: t });
            this.userContext.commit()
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.userContext.rollback()
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Delete(useCase) {
        try {
            const t = await this.userModel.beginTransaction()
            var p = await this.userModel.permissions.findByPk(useCase.Id);
            if (p == null){
                return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.NOT_FOUND)
            }
            await p.destroy({ transaction: t })
            this.userModel.commit()
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            this.userModel.rollback()
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}

module.exports = {
    PermissionCommandService
}