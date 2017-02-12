const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    address: String,
    cuisines: String,
    img: String,
    ratings: Number,
    comments: {
        type: String,
        default: 'Enter comments'
    }
});
const model = mongoose.model('Restaurant', schema);
module.exports = {
    RestaurantModel: model
};
