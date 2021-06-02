const DTO = require('../dto/permission')
class PermissionMapper {

    static ToEntity(dto, entity) {
        entity.Code = dto.Code;
        entity.Name = dto.Name;
    }

    static ToDto(entities) {
        if (Array.isArray(entities)){
            let items = [];
            for(let i = 0; i < entities.length; i++){
                const entity = entities[i];
                items.push(new DTO.PermissionDTO(entity.Id, entity.Code, entity.Name))
            }
            return items;
        } else {
            return new DTO.PermissionDTO(entities.Id, entities.Code, entities.Name);
        }
    }
}

module.exports = {
    PermissionMapper
}
