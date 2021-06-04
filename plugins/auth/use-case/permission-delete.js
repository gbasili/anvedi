'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base.js'

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

export default {
    PermissionDeleteRequest,
    PermissionDeleteResponse
}