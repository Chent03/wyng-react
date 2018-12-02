const mongoose = require('mongoose');
const { Schema } = mongoose;

const imagesSchema = new Schema({
    title: String,
    imageUrl: String,
    votes: { type: Number, default: 0 },
});

mongoose.model('images', imagesSchema);