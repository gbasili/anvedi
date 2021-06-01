const UseCase = require('../../base/use-case/use-case-base')

class PermissionReadOneRequest extends UseCase.UseCaseRequestBase {
    
    constructor() {
        super()
    }
    
}

class PermissionReadOneResponse extends UseCase.UseCaseResponseBase {
    
    constructor(permission, resultCode) {
        super(resultCode)
        this.Permission = permission
    }

}

class PermissionReadAllRequest extends UseCase.UseCaseRequestBase {
    
    constructor() {
        super()
    }
    
}

class PermissionReadAllResponse extends UseCase.UseCaseResponseBase {
    
    constructor(permissions, resultCode) {
        super(resultCode)
        this.Permissions = permissions
    }

}


module.exports = {
    PermissionReadAllRequest,
    PermissionReadAllResponse,
    PermissionReadOneRequest,
    PermissionReadOneResponse,
}