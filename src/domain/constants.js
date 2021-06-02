const DataLength = {
    Permission: {
        Code: 4,
        Name: 100
    }
}

const Default = {
    PagerLimit: 50,
    PagerLimits: [5, 10, 20, 50, 100, 200, 500],
    PagerLimitMax: 500
}

const Operator = {
    BW: 'bw', // between
    CN: 'cn', // contains
    EQ: 'eq', // equalsTo 
    EW: 'eq', // endsWith 
    GE: 'ge', // greaterThanOrEqualsTo
    GT: 'gt', // greaterThan
    IN: 'in', // in
    LE: 'le', // lessThanOrEqualsTo
    LK: 'lk', // like
    LT: 'lt', // lessThan
    NE: 'ne', // notEqualsTo
    NI: 'ni', // notIn 
    SW: 'sw', // startsWith
}

const ResulCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

module.exports = {
    DataLength,
    Default,
    Operator,
    ResulCode
}