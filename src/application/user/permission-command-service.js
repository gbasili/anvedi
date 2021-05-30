const BaseCommand = require('../base/base-command-service')
const UseCase = require('../../domain/user/use-case/permission-create')

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor(userModel) {
        super()
        this.userModel = userModel;
    }

    async Create(request) {
        try {
            await this.userModel.permissions.create(request.Permission);
            return new UseCase.PermissionCreateResponse(request.Permission, 200)
        } catch(ex) {
            console.log(ex)
            return new UseCase.PermissionCreateResponse(request.Permission, 500)
        }
    }

}

module.exports = {
    PermissionCommandService
}