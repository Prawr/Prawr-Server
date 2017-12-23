const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fk_userId: mongoose.Schema.Types.ObjectId,
    fk_seriesId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    content: { type: String, default: '' }
});

module.exports = mongoose.model('Review', reviewSchema);