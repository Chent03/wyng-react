const mongoose = require('mongoose');
const Images = mongoose.model('images');

const image_controller = require('../controllers/imageController');

module.exports = (app) => {
    app.get('/api/images', image_controller.get_images);

    app.post('/api/images', image_controller.post_image);

    app.post('/api/vote', image_controller.post_vote);
}