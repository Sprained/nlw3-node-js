const Orphanage = require('../models/Orphanage');
const Image = require('../models/Images');

const orphanageView = require('../views/OrphanageView');

module.exports = {
    async index(req, res) {
        const orphanages = await Orphanage.findAll({
            include: [Image]
        });
        console.log(orphanages);

        return res.json(orphanageView.renderMany(orphanages))
    },

    async show(req, res) {
        const orphanages = await Orphanage.findOne({
            where: { id: req.params.id },
            include: [Image]
        });
        console.log(orphanages);

        return res.json(orphanageView.render(orphanages))
    },

    async store(req, res) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;

        const requestImages = req.files;
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const orphanage = await Orphanage.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });

        return res.status(201).json({ message: 'Orfanato cadastrado com sucesso!' });
    }
}