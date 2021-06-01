const DTO = require('../../base/dto/base-dto')

class PermissionDTO extends DTO.BaseDTO {
    
    constructor(id, code, name) {
        super(id);
        this.Code = code;
        this.Name = name;
    }
}

module.exports = {
    PermissionDTO
}