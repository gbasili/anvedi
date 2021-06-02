const UseCase = require('../../base/use-case/use-case-base')

class PermissionDeleteRequest extends UseCase.UseCaseRequestBase {
    
    constructor(id) {
        super()
        this.Id = id
    }
    
}

class PermissionDeleteResponse extends UseCase.UseCaseResponseBase {
    
    constructor(resultCode) {
        super(resultCode)
    }

}

module.exports = {
    PermissionDeleteRequest,
    PermissionDeleteResponse
}