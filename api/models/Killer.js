var mongoose = require('mongoose');

var KillerSchema = mongoose.Schema({
    name: String,
    start: Number,
    end: Number,
    deathCount: Number,
    backStory: String,
    image: String
});

module.exports = mongoose.model('Killer', KillerSchema);

