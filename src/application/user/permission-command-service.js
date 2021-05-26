const BaseCommand = require('../base/base-command-service')
const UseCase = require('../../domain/user/use-case/permission-create')

class PermissionCommandService extends BaseCommand.BaseCommandService {
    
    constructor() {
        super()
    }

    Create(request) {
        return new UseCase.PermissionCreateResponse(request.Permission, 201)
    }

}

module.exports = {
    PermissionCommandService
}