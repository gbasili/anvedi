'use strict'
import buildFastify  from '../app.js'

class Helper {
    constructor(){

    }

    buildFastify(startup, config, options){
        return buildFastify(startup, { config: config, fastifyOptions: {}})
    }

    getQueryOptions(){
        return {
            "s": [{ "f": "Id", "a": false }],
            "p": { "l": 20, "o": 0 },
            "l":[],
            "i": []
        }
    }

    initialize(startup, fastify){
        startup.start()
    }

    preExecute(fastify){

    }

    postExecute(fastify){
        
    }
    
    terminate(startup, fastify){
        fastify.close()
        startup.stop()
    }
}

export default Helper
