const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fk_producerId: mongoose.Schema.Types.ObjectId,
    categories: [],
    title: String,
    description: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    avgRating: { type: Number, default: -1 },
    seasons: { type: [], default: [] }
});

module.exports = mongoose.model('Series', seriesSchema);