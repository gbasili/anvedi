'use strict'
import BaseDTO from '../../anvedi/domain/dto/base-dto.js'

class PermissionDTO extends BaseDTO {
    
    constructor(id, code, name) {
        super(id)
        this.Code = code
        this.Name = name
    }
}

export default PermissionDTO