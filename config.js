const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    
    db_user_host: process.env.DB_USER_HOST,
    db_user_username: process.env.DB_USER_USERNAME,
    db_user_password: process.env.DB_USER_PASSWORD,
    db_user_database: process.env.DB_USER_DATABASE,
    db_user_dialect: process.env.DB_USER_DIALECT,
    db_user_dialect_options: process.env.DB_USER_DIALECT_OPTIONS,
    db_user_storage: process.env.DB_USER_STORAGE,
    db_user_pool_max: process.env.DB_USER_POOL_MAX,
    db_user_pool_min: process.env.DB_USER_POOL_MIN,
    db_user_pool_acquire: process.env.DB_USER_POOL_ACQUIRE,
    db_user_pool_idle: process.env.DB_USER_POOL_IDLE,
    db_user_logging: process.env.DB_USER_LOGGING = "0" ? false : console.log
}