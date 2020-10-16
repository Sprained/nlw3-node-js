const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Image extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            path: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'images'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.orphanages, { foreignKey: 'id_orphanage'});
    }
}

module.exports = Image;