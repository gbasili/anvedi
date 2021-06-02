const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const K = require('../../constants');

GetOptions = function(where, queryAtoms, sortingAtoms, pager, includeAtoms, loadAtoms){
    let options = {}
    // queryAtoms
    if (where == null){
        where = GetWhere(queryAtoms)
    }
    if (where){
        options.where = where
    }
    // sortigAtoms
    const orders = GetOrders(sortingAtoms)
    if (orders){
        options.order = orders
    }
    // pager
    options.limit = pager.limit
    options.offset = pager.offset
    // loadAtoms
    const includes = GetIncludes(includeAtoms)
    if (includes ){
        options.includes = includes
    }
    // loadAtoms
    const attributes = GetAttributes(loadAtoms)
    if (attributes ){
        options.attributes = attributes
    }
    return options
}

GetAttributes = function(loadAtoms){
    let attributes = null
    if (Array.isArray(loadAtoms) && loadAtoms.length > 0){
        attributes = [];
        for(let i = 0; i < loadAtoms.length; i++){
            attributes.push(loadAtoms[i])
        }
    }
    return attributes
}
    
GetIncludes = function(includeAtoms){
    let includes = null
    if (Array.isArray(includeAtoms) && includeAtoms.length > 0){
        includes = [];
        for(let i = 0; i < includeAtoms.length; i++){
            attributes.push(includeAtoms[i])
        }
    }
    return includes
}

GetOrders = function(sortingAtoms){
    let order = null
    if (Array.isArray(sortingAtoms) && sortingAtoms.length > 0){
        order = [];
        for(let i = 0; i < sortingAtoms.length; i++){
            const sa = sortingAtoms[i]
            order.push([sa.f, (sa.a ? 'ASC' : 'DESC')])
        }
    }
    return order
}

GetWhere = function(queryAtoms){
    let where = null
    if (Array.isArray(queryAtoms) && queryAtoms.length > 0){
        where = {}
        for(let i = 0; i < queryAtoms.length; i++){
            const qa = queryAtoms[i]
            const value = qa.v;
            switch(qa.o){
                case K.Operator.EQ:
                    where[qa.f] = { [Op.eq]: value }
                    break;
                case K.Operator.NE:
                    where[qa.f] = { [Op.ne]: value }
                    break;
                default: 
                    throw new Error('op: ' + qa.o + ' not implemented')

            }
        }
    }
    return where
}

module.exports = {
    GetOptions,
    GetWhere
}