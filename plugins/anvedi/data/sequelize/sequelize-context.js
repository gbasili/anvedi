'use strict'
class SequelizeContext {

    constructor(sequelize){
        this.sequelize = sequelize
        this.transaction = null
    }

    async beginTransaction(cb){
        this.transaction = await sequelize.transaction()
        return this.transaction
    }

    async commit(){
        this.transaction.commit()
    }

    async rollback(){
        this.transaction.rollback()
    }

}

export default SequelizeContext