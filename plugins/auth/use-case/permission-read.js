'use strict'
import UseCase from '../../anvedi/domain/use-case/use-case-base.js'

class PermissionReadOneRequest extends UseCase.UseCaseRequestBase {
    constructor(id) {
        super()
        this.id = id;
    }
}

class PermissionReadOneResponse extends UseCase.UseCaseResponseBase {
    constructor(permission, resultCode) {
        super(resultCode)
        this.Permission = permission
    }
}

class PermissionReadAllRequest extends UseCase.UseCaseReadAllRequest {
    constructor(queryAtoms, sortingAtoms, pager, includeAtoms, loadAtoms) {
        super(queryAtoms, sortingAtoms, pager, includeAtoms, loadAtoms)
    }
}

class PermissionReadAllResponse extends UseCase.UseCaseReadAllResponse {
    constructor(data, total, resultCode) {
        super(data, total, resultCode)
    }
}

export default {
    PermissionReadAllRequest,
    PermissionReadAllResponse,
    PermissionReadOneRequest,
    PermissionReadOneResponse,
}