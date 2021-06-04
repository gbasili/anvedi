const Default = {
    PagerLimit: 50,
    PagerLimits: [5, 10, 20, 50, 100, 200, 500],
    PagerLimitMax: 500
}

const Operator = {
    BETWEEN:                 'bw', // between
    CONTAINS:                 'cn', // contains
    EQUAL_TO:                 'eq', // equalTo 
    ENDS_WITH:                'eq', // endsWith 
    GREATER_THAN_OR_EQUAL_TO: 'ge', // greaterThanOrEqualsTo
    GREATER_THAN:             'gt', // greaterThan
    IN:                       'in', // in
    LESS_THAN_OR_EQUAL_TO:    'le', // lessThanOrEqualsTo
    LIKE:                     'lk', // like
    LESS_THAN:                'lt', // lessThan
    NOT_EQUAL_TO:             'ne', // notEqualsTo
    NOT_IN:                   'ni', // notIn 
    STARTS_WITH:              'sw', // startsWith
}

const ResulCode = {
    OK:                    200,
    BAD_REQUEST:           400,
    UNAUTHORIZED:          401,
    FORBIDDEN:             403,
    NOT_FOUND:             404,
    INTERNAL_SERVER_ERROR: 500
}

export default {
    Default,
    Operator,
    ResulCode
}