const BaseCommand = require('../base/base-command-service')
const UseCase = require('../../domain/user/use-case');
const K = require('../../domain/constants')
const Mapper = require('../../domain/user/mapper/permission-mapper')

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor(userModel) {
        super()
        this.userModel = userModel;
    }

    async Create(useCase) {
        try {
            await this.userModel.permissions.create(useCase.Permission);
            return new UseCase.Create.PermissionCreateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.PermissionCreateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Update(useCase) {
        try {
            var p = await this.userModel.permissions.findByPk(useCase.Permission.Id);
            if (p == null){
                return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.NOT_FOUND)
            }
            Mapper.PermissionMapper.ToEntity(useCase.Permission, p)
            await p.save();
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Update.PermissionUpdateResponse(useCase.Permission, K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

    async Delete(useCase) {
        try {
            var p = await this.userModel.permissions.findByPk(useCase.Id);
            if (p == null){
                return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.NOT_FOUND)
            }
            await p.destroy()
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.OK)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Delete.PermissionDeleteResponse(K.ResulCode.INTERNAL_SERVER_ERROR)
        }
    }

}

module.exports = {
    PermissionCommandService
}