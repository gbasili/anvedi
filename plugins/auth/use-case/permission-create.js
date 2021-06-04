'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base.js'

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

export default {
    PermissionCreateRequest,
    PermissionCreateResponse
}