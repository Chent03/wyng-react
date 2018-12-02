const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    voted: { type: Boolean, default: false }
});

mongoose.model('users', userSchema);