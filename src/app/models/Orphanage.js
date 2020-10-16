const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Orphanage extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            latitude: Sequelize.FLOAT,
            longitude: Sequelize.FLOAT,
            about: Sequelize.STRING,
            instructions: Sequelize.STRING,
            open_on_weekends: Sequelize.BOOLEAN,
            opening_hours: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'orphanages'
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.images, { foreignKey: 'id_orphanage' });
    }
}

module.exports = Orphanage;