'use strict'
const schemaPermissionCreate = {
    body: {
        type: 'object',
        required: ['Code', 'Name'],
        properties: {
            Code: { type: 'string', 'maxLength': 4 },
            Name: { type: 'string', 'maxLength': 100 }
        },
        additionalProperties: false
    }
};

const schemaPermissionRead = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' }
        },
        additionalProperties: false
    }
}

const schemaPermissionReadAll = {
    body: {
        type: 'object',
        required: [],
        properties: {
            q: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        f: { type: "string" },
                        o: { type: "string" },
                        v: { type: "string" },
                        t: { type: "string" },
                    },
                    required: [ "f", "o", "v", "t" ]
                }
            },
            s: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        f: { type: "string" },
                        a: { type: "boolean" }
                    },
                    required: ["f", "a"]
                }
            }, 
            p: {
                type: "object",
                required: ["l", "o"],
                properties: {
                    l: { type: "integer" },
                    o: { type: "integer" },
                },
                additionalProperties: false
            },
            i: {
                type: "array",
                items: { type: "string" }
            },
            l: {
                type: "array",
                items: { type: "string" }
            }
        },
        additionalProperties: false
    }
}

const schemaPermissionUpdate = {
    body: {
        type: 'object',
        required: ['Id', 'Code', 'Name'],
        properties: {
            Id: { type: 'integer', 'minimum': 1 },
            Code: { type: 'string', 'maxLength': 4 },
            Name: { type: 'string', 'maxLength': 100 }
        },
        additionalProperties: false
    }
}

const schemaPermissionDelete = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: { type: 'integer' }
        },
        additionalProperties: false
    }
}

export default {
    schemaPermissionCreate,
    schemaPermissionRead,
    schemaPermissionReadAll,
    schemaPermissionUpdate,
    schemaPermissionDelete
}
