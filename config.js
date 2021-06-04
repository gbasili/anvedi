'use strict'
import dotenv from 'dotenv'

dotenv.config()

// Export list
const config = { 
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    
    db_anvedi_host: process.env.DB_ANVEDI_HOST,
    db_anvedi_username: process.env.DB_ANVEDI_USERNAME,
    db_anvedi_password: process.env.DB_ANVEDI_PASSWORD,
    db_anvedi_database: process.env.DB_ANVEDI_DATABASE,
    db_anvedi_dialect: process.env.DB_ANVEDI_DIALECT,
    db_anvedi_dialect_options: process.env.DB_ANVEDI_DIALECT_OPTIONS,
    db_anvedi_storage: process.env.DB_ANVEDI_STORAGE,
    db_anvedi_pool_max: process.env.DB_ANVEDI_POOL_MAX,
    db_anvedi_pool_min: process.env.DB_ANVEDI_POOL_MIN,
    db_anvedi_pool_acquire: process.env.DB_ANVEDI_POOL_ACQUIRE,
    db_anvedi_pool_idle: process.env.DB_ANVEDI_POOL_IDLE,
    db_anvedi_logging: process.env.DB_ANVEDI_LOGGING == "console" ? console.log : false
}

export default config
