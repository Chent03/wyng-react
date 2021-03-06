const mongoose = require('mongoose');
const Images = mongoose.model('images');

exports.get_images = async (req, res) => {
    try {
        const images = await Images.find();
        res.send(images)
    } catch(err) {
        res.status(422).send(err);
    }
}

exports.post_image = async (req, res) => {
    const {title, imageUrl} = req.body;

    const image = new Images({
        title,
        imageUrl
    })

    try{
        await image.save();
        res.send(image);
    } catch(err) {
        res.status(422).send(err);
    }
}

exports.post_vote = async (req, res) => {
    const { imageId } = req.body;
    try {
        let i = await Images.updateOne({
            _id: imageId
        }, {
            $inc: { votes: 1}
        })
        req.user.voted = true;
        const user = await req.user.save();
        res.send(user);
    } catch(err) {
        res.status(422).send(err);
    }
}