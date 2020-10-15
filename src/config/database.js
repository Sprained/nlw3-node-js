require('dotenv/config');

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}