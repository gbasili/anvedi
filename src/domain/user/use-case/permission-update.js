const UseCase = require('../../base/use-case/use-case-base')

class PermissionUpdateRequest extends UseCase.UseCaseRequestBase {
    
    constructor(permission) {
        super()
        this.Permission = permission
    }
    
}

class PermissionUpdateResponse extends UseCase.UseCaseResponseBase {
    
    constructor(permission, resultCode) {
        super(resultCode)
        this.Permission = permission
    }

}

module.exports = {
    PermissionUpdateRequest,
    PermissionUpdateResponse
}