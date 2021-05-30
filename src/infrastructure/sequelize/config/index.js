module.exports = {
    HOST: '',
    USERNAME: '',
    PASSWORD: '',
    DATABASE: '',
    DIALECT: 'sqlite',
    DIALECT_OPTIONS: {},
    STORAGE: 'db/anvedi.db',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};