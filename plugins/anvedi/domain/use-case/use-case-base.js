'use strict'
import K from '../../constants.js'

class UseCaseRequestBase {
    constructor() {

    }
}

class UseCaseReadAllRequest extends UseCaseRequestBase {
    constructor(queryAtoms, sortingAtoms, pager, includeAtoms, loadAtoms) {
        super()
        if (pager == null){
            pager = {}
        }
        this.queryAtoms = queryAtoms || []
        this.sortingAtoms = sortingAtoms || []
        this.pager = { limit: pager.l || K.Default.PagerLimit, offset: pager.o || 0 }
        this.includeAtoms = includeAtoms || []
        this.loadAtoms = loadAtoms || []
    }
}

class UseCaseResponseBase {
    constructor(resultCode) {
        this.ResultCode = resultCode;
    }
}

class UseCaseReadAllResponse extends UseCaseResponseBase {
    constructor(data, total, resultCode) {
        super(resultCode)
        this.data = data
        this.total = total
    }
}

export default {
    UseCaseRequestBase,
    UseCaseReadAllRequest,
    UseCaseResponseBase,
    UseCaseReadAllResponse
}