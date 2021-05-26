const DTO = require('../../base/dto/base-dto')

class PermissionDTO extends DTO.BaseDTO {
    
    constructor(id, name) {
        super(id);
        this.Name = name;
    }
}

module.exports = {
    PermissionDTO
}