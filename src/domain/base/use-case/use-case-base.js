class UseCaseRequestBase {
    
    constructor() {

    }

}

class UseCaseResponseBase {

    constructor(resultCode) {
        this.ResultCode = resultCode;
    }

}

module.exports = {
    UseCaseRequestBase,
    UseCaseResponseBase
}