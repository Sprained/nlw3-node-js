const sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const models = [];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}