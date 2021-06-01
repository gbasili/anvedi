const BaseCommand = require('../base/base-command-service')
const UseCase = require('../../domain/user/use-case');

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor(userModel) {
        super()
        this.userModel = userModel;
    }

    async Create(request) {
        try {
            await this.userModel.permissions.create(request.Permission);
            return new UseCase.Create.PermissionCreateResponse(request.Permission, 200)
        } catch(ex) {
            console.log(ex)
            return new UseCase.PermissionCreateResponse(request.Permission, 500)
        }
    }

    async Update(request) {
        try {
            var p = await this.userModel.permissions.findByPk(request.Permission.Id);
            if (p == null){
                return new UseCase.Update.PermissionUpdateResponse(request.Permission, 404)
            }
            p.Code = request.Permission.Code;
            p.Name = request.Permission.Name;
            await p.save();
            return new UseCase.Update.PermissionUpdateResponse(request.Permission, 200)
        } catch(ex) {
            console.log(ex)
            return new UseCase.Update.PermissionUpdateResponse(request.Permission, 500)
        }
    }

}

module.exports = {
    PermissionCommandService
}