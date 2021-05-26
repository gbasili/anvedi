const Entity = require('../../base/entity/base-entity')

class Permission extends Entity.BaseEntity {
    
    constructor(id, name) {
        super(id)
        this.Name = name
    }
}

module.exports = {
    Permission
}