const UseCase = require('../../base/use-case/use-case-base')

class PermissionCreateRequest extends UseCase.UseCaseRequestBase {
    
    constructor(permission) {
        super()
        this.Permission = permission
    }
    
}

class PermissionCreateResponse extends UseCase.UseCaseResponseBase {
    
    constructor(permission, resultCode) {
        super(resultCode)
        this.Permission = permission
    }

}

module.exports = {
    PermissionCreateRequest,
    PermissionCreateResponse
}