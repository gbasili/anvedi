const UseCase = require('../../base/use-case/use-case-base')


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

module.exports = {
    PermissionReadAllRequest,
    PermissionReadAllResponse,
    PermissionReadOneRequest,
    PermissionReadOneResponse,
}