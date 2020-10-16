const Image = require('../models/Images');
module.exports = {
    render(image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        }
    },

    renderMany(images){
        return images.map(image => this.render(image));
    }
}